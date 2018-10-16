<?php

namespace App\Http\Controllers;

use App\Medicine;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class MedicineController extends Controller
{
    protected $request;
    protected $user;

    /**
     *
     * @param Request $request
     * @param Product $user
     */
    public function __construct(Request $request, Medicine $user)
    {
        $this->request = $request;
        $this->user = $user;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = $this->user->all();
        return response()->json(['data' => $user,
            'status' => Response::HTTP_OK]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            DB::beginTransaction();
            $data = $this->request->all();
            $validator = Validator::make($request->all(), [
                'register_date' => 'date',
            ]);
            if ($validator->fails()) {
                return response()->json([
                    'status' => 0,
                    'error' => $validator->errors()], 401);
            }
            $symptom['name'] = !empty($data['name']) ? $data['name'] : null;
            $symptom['start_number'] = !empty($data['start_number']) ? $data['start_number'] : 1;
            $extension = $data['picture']->getClientOriginalExtension(); // getting image extension
            $filename = time() . '.' . $extension;
            $data['picture']->move('images/medicine/', $filename);
            $symptom['picture_name'] = $filename;
            $symptomId = $this->user->insertGetId($symptom);
            $symptomData = $this->user->where('id', $symptomId)->first();
            DB::commit();
            return response()->json(['data' => $symptomData,
                'status' => 1]);
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json(['status' => 0, 'error' => $exception->getMessage()]);
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try {
            DB::beginTransaction();
            $data = $this->request->all();
            $checkToken = $this->checkToken($data['token']);
            if ($checkToken) {
                $validator = Validator::make($request->all(), [
                    'name' => 'max:127',
                    'email' => 'required|email|max:127|unique:users,email,' . $id,
                    'password' => 'required',
                    'birthday' => 'date'
                ]);
                if ($validator->fails()) {
                    return response()->json([
                        'status' => 0,
                        'error' => $validator->errors()], 401);
                }
                unset($data['token']);
                if (!empty($data['file'])) {
                    $extension = $data['file']->getClientOriginalExtension(); // getting image extension
                    $filename = time() . '.' . $extension;
                    $data['file']->move('images/users/', $filename);
                    $data['picture'] = $filename;
                    unset($data['file']);
                }
                if ($this->user->where('id', $id)->update($data)) {
                    DB::commit();
                    return response()->json(['status' => 1]);
                }
                return response()->json(['status' => 0]);
            }
            return response()->json(['status' => 0, 'error' => 'Token not found or expired']);
        } catch (Exception $exception) {
            DB::rollBack();
            return response()->json(['status' => 0, 'error' => $exception->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {

        $user = $this->user->find($id);
        $user->delete();

        return response()->json(['status' => 1]);
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     * @throws Exception
     */
    public function show($id)
    {
        try {
            $data = $this->request->all();
            $this->checkToken($data['token']);
            $symptomData = $this->user->where('id', $id)->with('symptomPictures')->first();
            return response()->json(['status' => 1, 'data' => $symptomData]);
        } catch (Exception $exception) {
            return response()->json(['status' => 0, 'error' => $exception->getMessage()]);
        }
    }
}
