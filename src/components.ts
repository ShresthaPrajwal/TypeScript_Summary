export function setupComponent(str:string): void{
    document.querySelector<HTMLDivElement>('#app')!.innerHTML += str;
}