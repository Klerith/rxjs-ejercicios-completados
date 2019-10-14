import { fromEvent } from 'rxjs';
import { take, first, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click' );



click$.pipe(
    tap<MouseEvent>( console.log ),
    // map( event => ({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }) )
    map( ({ clientX, clientY }) => ({ clientY,clientX }) ),

    first( event => event.clientY >= 150 )
)
.subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});





