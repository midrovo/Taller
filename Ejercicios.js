window.addEventListener('load', () => {
    const ejercicio1 = document.querySelector("form")
    switch(parseInt(ejercicio1.id)) {
        case 1:
            ejercicio1.addEventListener("submit", (e) => {
                e.preventDefault();
                let num = document.getElementById("numero");
                let resp = document.getElementById("resultado");
                resp.value = serieUlam(num.value);
            });
            break;
        case 2:
            ejercicio1.addEventListener("submit", (e) => {
                e.preventDefault();
                let num = document.getElementById("numero");
                let resp = document.getElementById("resultado");
                resp.value = seriefibonacci(num.value);
            });
            break;
        case 3:
            ejercicio1.addEventListener("submit", (e) => {
                e.preventDefault();
                let num = document.getElementById("numero");
                let resp = document.getElementById("resultado");
                resp.value = numeroPerfecto(num.value);
            });
            break;
        case 4:
            ejercicio1.addEventListener("submit", (e) => {
                e.preventDefault();
                let num1 = document.getElementById("numero1");
                let num2 = document.getElementById("numero2")
                let resp = document.getElementById("resultado");
                resp.value = numeroAmigo(num1.value, num2.value);
            });
            break;
        case 5:
            ejercicio1.addEventListener("submit", (e) => {
                e.preventDefault();
                let num = document.getElementById("numero");
                let resp = document.getElementById("resultado");
                resp.value = numeroFactorial(num.value);
            });
            break;
        default:
            break;
    }
});

let serieUlam = n => {
    let ulam = []
    while(n != 1) {
        if(n % 2 == 0) {
            n /= 2;
            ulam.push(n);
        } else {
            n = (n*3) + 1;
            ulam.push(n);
        }
    }
    return ulam.toString();
}

let seriefibonacci = n => {
    let fibonacci = 0;
    let anterior = 0;
    let siguiente = 0;
    let fibo = [];
    for(let i = 0; i < n; i++) {
        fibo.push(fibonacci);
        siguiente = fibonacci;
        fibonacci = anterior + (siguiente + 1);
        anterior = siguiente - 1;
    }
    return fibo.toString();
}

let numeroPerfecto = n => {
    let perfecto = [];
    let result = 0;
    for(let i = 0; i < n; i++) if(n % (i+1) == 0 && (i+1) != n) perfecto.push(i+1);
    for(let num of perfecto) result += num;
    return result == n ? `El numero ${n} es perfecto = ${perfecto.toString()} = ${result}` : "No es un numero perfecto";
}

let numeroAmigo = (n1, n2) => {
    let amigo1 = [];
    let amigo2 = [];
    let result1= 0;
    let result2 = 0;

    for(let i = 0; i < n1; i++) if(n1 % (i+1) == 0 && (i+1) != n1) amigo1.push(i+1);
    for(let i = 0; i < n2; i++) if(n2 % (i+1) == 0 && (i+1) != n2) amigo2.push(i+1);
    for(let num1 of amigo1) result1 += num1;
    for(let num2 of amigo2) result2 += num2;

    return result1 == n2 && result2 == n1 ? `${n1} y ${n2} son amigos = ${amigo1} = ${result1} || ${amigo2} = ${result2}` : "No son amigos";
}

let numeroFactorial = n => {
    if(n == 1 || n == 0) return 1;
    else return numeroFactorial(n-1) * n;
}