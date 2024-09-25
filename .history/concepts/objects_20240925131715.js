const phone = {
    brand: 'Huawei',
    'S O' : 'Android 10',
    ram: '4GB',
    hdd: '256GB',
    screen: '5"',
    model: 'Y',
    functional: true,
    damage: false,
};

console.log(phone);
console.log(phone.brand);
phone.damage = true;

phone.color = 'Black';
phone['case color'] = 'grey;'
console.log(phone);