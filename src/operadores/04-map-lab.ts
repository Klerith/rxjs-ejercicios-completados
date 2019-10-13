import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, sem eget ullamcorper sodales, erat ligula gravida est, a porta nibh libero et odio. Quisque vitae congue elit, vitae blandit est. Donec cursus sodales volutpat. Maecenas lorem nisl, faucibus eu pretium quis, pretium nec nunc. Ut accumsan dolor in urna tincidunt congue. Nulla facilisi. Phasellus congue dignissim leo, eget mattis urna. Integer tempus luctus risus gravida congue. Vivamus placerat ipsum ut leo blandit ultricies. Pellentesque sollicitudin quam odio, a sagittis justo accumsan sed. Maecenas mollis dolor a cursus ullamcorper. Vestibulum neque nisl, efficitur id ligula aliquam, facilisis condimentum augue. Sed ultrices, libero at posuere mattis, nunc ex mattis tortor, a aliquet quam ex ac libero.
<br/><br/>
Aliquam ut urna elementum sapien faucibus lobortis. Duis a sapien et quam ultricies ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse aliquet nec ex vulputate elementum. Suspendisse commodo ipsum nulla, vel aliquet augue placerat id. Morbi nec ipsum est. Vivamus a purus euismod, molestie justo id, sollicitudin eros. Fusce euismod augue et vestibulum posuere. Nullam interdum dolor nec elit vestibulum, sit amet tempus augue efficitur. Ut tempus dapibus quam vitae tempor. Duis eget imperdiet purus. Nullam congue, eros ac malesuada congue, nunc elit placerat nulla, ac fringilla eros libero et erat. Pellentesque varius risus eget neque posuere, quis tempor velit feugiat.
<br/><br/>
Proin efficitur metus ipsum, ut accumsan velit egestas eu. Sed enim lectus, mollis nec urna eu, laoreet rhoncus tellus. Vestibulum id neque odio. Donec sagittis, sem laoreet luctus maximus, nisi est tincidunt metus, tincidunt luctus libero arcu ut enim. Sed tempus metus eu interdum varius. Praesent id vehicula lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec non elementum justo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris dolor lacus, laoreet non lacus scelerisque, aliquam molestie erat. Vestibulum sapien tellus, rhoncus nec leo at, cursus cursus tortor. Proin luctus, purus convallis aliquet lobortis, nibh dolor efficitur nibh, ac posuere elit turpis et arcu. Aliquam enim nunc, porttitor sit amet enim eget, elementum posuere nibh.
<br/><br/>
Fusce fringilla nec massa vel molestie. Nam a turpis porttitor, bibendum nisi eu, dictum nisl. Fusce in est tortor. Fusce vestibulum magna a pulvinar luctus. Aenean feugiat porttitor leo, nec feugiat mi dignissim non. Praesent elementum, mauris sagittis fermentum aliquam, justo turpis fermentum risus, sit amet laoreet magna urna eu enim. Sed auctor in magna non pretium. Suspendisse potenti. Morbi non purus et mauris euismod varius. Sed fringilla ac mauris posuere faucibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus aliquam eu urna a efficitur. Phasellus neque odio, mollis quis ante varius, consectetur rutrum purus.
<br/><br/>
Sed eget quam enim. Curabitur pretium mi vel fermentum pretium. Nullam non felis quis magna blandit scelerisque cursus eu ipsum. Maecenas facilisis bibendum tempus. Nam scelerisque euismod ex in ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean ac mollis felis, a posuere justo. Nam imperdiet sem velit, id sagittis nibh blandit non. Nunc non nibh placerat, varius erat sed, pharetra ligula. Donec eget tempor elit. Aliquam orci ex, mattis ac tellus at, tincidunt egestas nisl.
`;

const body = document.querySelector('body');
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularProcentajeScroll = ( event ) => {
    
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    return ( scrollTop / ( scrollHeight - clientHeight ) ) * 100;
}

// Streams
const scroll$ = fromEvent( document, 'scroll');
// scroll$.subscribe( console.log );

const progress$ = scroll$.pipe(
    // map( event => calcularProcentajeScroll(event) )
    map( calcularProcentajeScroll ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {

    progressBar.style.width = `${ porcentaje }%`;

});