import authRouter from './auth.js';
import hotelsRouter from './hotels.js';
import roomsRouter from './rooms.js';
import userRouter from './user.js';
import flightRouter from './flights.js';
import passengerRouter from './passenger.js';
import seatsRouter from './seats.js'
import staffRouter from './staff.js'

export default (app)=>{
    //routing the index to all other routes 
    app.use('/api/auth' , authRouter);
    app.use('/api/hotels' , hotelsRouter);
    app.use('/api/rooms' , roomsRouter);
    app.use('/api/user' , userRouter);
    app.use('/api/flights', flightRouter);
    app.use('/api/passenger', passengerRouter);
    app.use('/api/seats',seatsRouter);

    app.use('/api/staff', staffRouter );
}
