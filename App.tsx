import {Home} from './src/screens/Home';
export default function App() {
  /**
   * Diferença entre o export e export default
   * se eu deixar só o export function: ele não consegue encontrar uma importação default
   * Sem o default eu coloco o endereço e entre {} eu coloco o componente q u eu quero
   * Quando coloco default eu não preciso colocar entre chaves 
   */
  return (
    <Home/>
  );
}

