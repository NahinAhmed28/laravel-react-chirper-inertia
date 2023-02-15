<?php

namespace App\Http\Controllers;

use App\Models\Log;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LogController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Inertia\Response
     */
    public function index()
    {
        $file = file(storage_path() . '/' . 'app' . '/public/' . '/api/' . 'log2.log');
//        dd($file);

        $datas = json_decode(json_encode($file), true);
//        dd($datas);
        $lines = array();
        foreach($datas as  $value) {
            $parts = explode(' ', $value);
            $lines[] = array(
                'date' => ltrim($parts[0], '[') . ' ' . rtrim($parts[1], ']'),
                '2' => $parts[2],
                '3' => $parts[3],
                '4' => $parts[4],
                '5' => $parts[5],
                '6' => $parts[6],
                '7' => $parts[7],
                '8' => $parts[8],
                '9' => $parts[9],
                '10' => $parts[10],
            );

        }


        return Inertia::render('LogDashboard',$lines);


    }

    public function check()
    {
        $file = file(storage_path() . '/' . 'app' . '/public/' . '/api/' . 'log2.log');
//        dd($file);

        $datas = json_decode(json_encode($file), true);
//        dd($datas);
        $lines = array();
        foreach($datas as  $value) {
            $parts = explode(' ', $value);
            $lines[] = array(
                'date' => ltrim($parts[0], '[') . ' ' . rtrim($parts[1], ']'),
                '2' => $parts[2],
                '3' => $parts[3],
                '4' => $parts[4],
                '5' => $parts[5],
                '6' => $parts[6],
                '7' => $parts[7],
                '8' => $parts[8],
                '9' => $parts[9],
                '10' => $parts[10],
            );

        }


        echo "<pre>";
        print_r($lines);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function show(Log $log)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function edit(Log $log)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Log $log)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function destroy(Log $log)
    {
        //
    }
}
