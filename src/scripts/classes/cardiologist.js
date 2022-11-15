export class Cardiologist{
    constructor({description, diseases, doctor, id, mass, name, pressure, purpose, urgency}){
        this.description = description;
        this.diseases = diseases;
        this.doctor = doctor;
        this.id = id;
        this.mass = mass;
        this.name = name;
        this. pressure = pressure;
        this.purpose = purpose;
        this.urgency = urgency
    }
    render(){
        let container = document.querySelector('.container-cards')
        container.insertAdjacentHTML('beforeend',`<p>${this.name}</p>`)
}
}