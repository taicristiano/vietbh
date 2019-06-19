<?php

namespace App\Http\Controllers;

use App\Articles;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;


class ArticlesController extends Controller
{
    protected $articles;

    public function __construct(Articles $articles)
    {
        $this->articles = $articles;
    }

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $arc = $this->articles->all();
        return $this->responseSuccess($arc);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'register_date' => 'date',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 0,
                'error' => $validator->errors()], 401);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'register_date' => 'date|required',
        ]);
        if ($validator->fails()) {
            return $this->responseError($validator->errors()->first());
        }
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function show($id)
    {
        $arc = $this->articles->find($id);
        return $this->responseSuccess($arc);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Articles $articles
     * @return Response
     */
    public function edit(Articles $articles)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Articles $articles
     * @return Response
     */
    public function update(Request $request, Articles $articles)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Articles $articles
     * @return Response
     */
    public function destroy(Articles $articles)
    {
        //
    }
}
