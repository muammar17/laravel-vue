<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    // use HasFactory;
    protected $table = "product";
    protected $primaryKey = "id";
    protected $fillable = ['id', 'code', 'item_id', 'qty', 'qty_unit', 'country_name', 'item_code', 'item_desc', 'product_type', 'grade', 'connection', 'size'];
}
