// класс самолетов
class Aircraft {
    #name = 'название самолета'
    #maxSpeed = 'максимальная скорость самолета'
    status = 'статус самолета: в воздухе / на земле'
    type = 'тип самолета'
    static all = []
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        Aircraft.all.push(this);
    }

    get name() {
        return this.#name;
    }
    set name(name) {
        if(name ===  '') {
            throw new Error('Имя самолета не должно быть пустым!');
        }
        this.#name = name;
    }

    get maxSpeed() {
        return this.#maxSpeed;
    }
    set maxSpeed(speed) {
        if(speed === '') {
            throw new Error('Скорость самолета не должна быть пустой!');
        }
        this.#maxSpeed = speed;
    }

    get status() {
        return this.status
    }
    set status(status) {
        this.status = status;
    }

    // взлет
    TakeOff() {
        this.status = `самолет ${this.name} в воздухе`;
    }
    // посадка
    Landing() {
        this.status = `самолет ${this.name} на земле`;
    }
}

// класс самолета МИГ
class MIG extends Aircraft {
    type = 'MIG';
    Attack() {
        return this.name;
    }
}

// класс самолета ТУ-154
class TY_154 extends Aircraft {
    type = 'TY_154';
    engine = new Engine() // композиция
}

// класс двигателя для самолета ТУ-154
class Engine{
    name = 'НК-8-2у'
    type = 'турбовентиляторный, двухконтурный'
    weight = '2100 кг ± 2%'
}

// класс аэропорта
class Airport{
    static allAircraft = []
    constructor(aircrafts) {
        Airport.allAircraft = aircrafts; // агрегация
    }

    // Принять самолет
    Receive(name) {
        this.status = `самолет ${name} на земле`;
    }

    // Самолет освободил место и улетел
    FlewAway(name) {
        this.status = `самолет ${name} в воздухе`;
    }

    // Самолет ушел на стоянку
    WentToTheParking(name) {
        this.status = `самолет ${name} на земле`;
    }

    // Самолет готов взлетать
    ReadyToTakeOff(name) {
        this.status = `самолет ${name} на земле`;
    }

    //экстренная посадка самолета
    EmergencyLanding(name) {
        this.status = `самолет ${name} на земле`;
    }

    //захват самолета террористами
    CaptureByTerrorists(name) {
        this.status = `самолет ${name} в воздухе`;
    }

}
