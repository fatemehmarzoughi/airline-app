export type IAirline = 'Homa' | 'Mahan' | 'IranAir' | 'Aseman' | 'Emirates';

export type IFlight = {
    airline: IAirline,
    price: number,
    flightTime: Date
}