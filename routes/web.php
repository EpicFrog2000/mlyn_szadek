<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Illuminate\Http\Request;
use Nette\NotImplementedException;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/historia-mlyna', function () {
    return Inertia::render('HistoriaMlyna');
})->name('HistoriaMlyna');

Route::get('/nasze-maki', function () {
    return Inertia::render('NaszeMaki');
})->name('NaszeMaki');

Route::get('/nasze-maki-b2b', function () {
    return Inertia::render('MakiB2B');
})->name('MakiB2B');


Route::get('/maka-detale', function () {
    return Inertia::render('MakaDetailsCard');
})->name('MakaDetailsCard');

Route::get('/kontakt', function () {
    return Inertia::render('Contact');
})->name('kontakt');


Route::post('/api/sendContactMail', function (Request $request) {
	$validated = $request->validate([
		'name' => 'required|string',
		'email' => 'required|email',
		'topic' => 'nullable|string',
		'inqueryType' => 'nullable|string',
		'message' => 'required|string',
	], [
		'name.required' => 'Nie podano imienia i nazwiska',
		'email.required' => 'Nie podano emaila',
		'email.email' => 'Niepoprawny format emaila',
	]);

    return response()->json(['status'=>'ERROR','message'=>'not implemented'], 500);

    //return response()->json(['status'=>'OK'], 200);
});

