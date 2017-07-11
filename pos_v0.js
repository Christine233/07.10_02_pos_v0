/*** Created by christine on 7/11/17.*/
'use strict';
var inputs = [
    {
        barcode: 'ITEM000000',
        name: '可口可乐',
        unit: '瓶',
        price: 3.00,
        count: 5
    },
    {
        barcode: 'ITEM000001',
        name: '雪碧',
        unit: '瓶',
        price: 3.00,
        count: 2
    },
    {
        barcode: 'ITEM000004',
        name: '电池',
        unit: '个',
        price: 2.00,
        count: 1
    }
];

function subtotal(inputs) {
    for(let i = 0; i < inputs.length; i++){
        var s = inputs[i].price*inputs[i].count;
        inputs[i].sum = s;
    }
    return inputs;
}

function total(inputs) {
    var totalNum = 0;
    for(let i = 0; i < inputs.length; i++) {
        totalNum += inputs[i].sum;
    }
    return totalNum;
}

function print() {
    var final = subtotal(inputs);
    var list = '***<没钱赚商店>收据***\n';
    for(let i = 0; i < final.length; i++){
        list += '名称：' + final[i].name + ', ' + '数量：' + final[i].count +  ', ' + '单价：' + final[i].price + '(元)， 小计：'+ final[i].sum.toFixed(2) + '(元)\n';
    }
    list += '----------------------\n总计：' + total(inputs).toFixed(2) +'(元)\n**********************';
    return list;
}
console.log(print());