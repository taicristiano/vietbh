<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\ScheduleContent;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Intervention\Image\ImageManagerStatic as Image;

class ScheduleController extends Controller
{

    protected $schedule;

    public function __construct(Schedule $schedule)
    {
        $this->schedule = $schedule;

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        try {
            $scheduleData = $this->schedule->all();
            return $this->responseSuccess($scheduleData);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.blocks.schedule.add');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $data = $request->all();
            $schedule = [
                'title' => $data['title'],
                'short_content' => $data['short_content']
            ];
            $extension = $data['thumbnail']->getClientOriginalExtension(); // getting image extension
            $filename = time() . '.' . $extension;
            $imageResize = Image::make($data['thumbnail']->getRealPath());
            $imageResize->resize(180, 240);
            $imageResize->save(public_path('images/schedule/' . $filename));
            $schedule['thumbnail'] = $filename;
            $scheduleId = $this->schedule->insertGetId($schedule);
            $scheduleContents = [];
            foreach ($data['scheduleContent'] as $key => $scheduleContent) {
                $scheduleContents[$key] = [
                    'schedule_id' => $scheduleId,
                    'content' => $scheduleContent,
                    'order' => $key + 1,
                    'created_at' => now(),
                    'updated_at' => now()
                ];
            }
            ScheduleContent::insert($scheduleContents);
            $scheduleData = $this->schedule->where('id', $scheduleId)->first();
            DB::commit();
            return $this->responseSuccess($scheduleData);
        } catch (Exception $exception) {
            DB::rollBack();
            return $this->responseError($exception->getMessage());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param \App\Schedule $schedule
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        try {
            $scheduleData = $this->schedule->find($id);
            return $this->responseSuccess($scheduleData);
        } catch (Exception $exception) {
            return response()->json($exception->getMessage());
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     * @return void
     */
    public function edit($id)
    {
        return view('admin.blocks.schedule.edit');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Schedule $schedule
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Schedule $schedule)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Schedule $schedule
     * @return \Illuminate\Http\Response
     */
    public function destroy(Schedule $schedule)
    {
        //
    }
}
