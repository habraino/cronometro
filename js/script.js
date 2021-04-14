class CountDown {
    constructor(futureDate) {
        this.futureDate = futureDate;
    }

    get _atualDate() {
        return new Date();
    }

    get _futureDate() {
        return new Date(this.futureDate);
    }

    get _timeStampDiff() {
        return this._futureDate.getTime() - this._atualDate.getTime();
    }

    get days() {
        return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));
    }

    get hours() {
        return Math.floor(this._timeStampDiff / (60 * 60 * 1000));
    }

    get minutes() {
        return Math.floor(this._timeStampDiff / (60 * 1000));
    }

    get seconds() {
        return Math.floor(this._timeStampDiff / 1000);
    }

    get total() {
        const days = this.days < 10 ? "0" + this.days : this.days;
        const hours = this.hours % 24 < 10 ? "0" + (this.hours % 24) : this.hours % 24;
        const minutes = this.minutes % 60 < 10 ? "0" + (this.minutes % 60) : this.minutes % 60;
        const seconds = this.seconds % 60 < 10 ? "0" + (this.seconds % 60) : this.seconds % 60;

        return [days,hours,minutes,seconds];
    }

}

const tempoParaOWWB = new CountDown("31 Mar 2021 08:07:20 GMT+0000");
const tempos = document.querySelectorAll("[data-time]");

function mostrarTempo (){
    tempos.forEach((tempo, index) => {
        tempo.innerHTML = tempoParaOWWB.total[index];
    });
}

setInterval(mostrarTempo, 1000);
