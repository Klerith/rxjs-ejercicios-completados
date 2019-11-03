import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';



const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )
)
.subscribe( console.log );




