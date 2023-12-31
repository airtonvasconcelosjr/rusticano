import { createSlice } from '@reduxjs/toolkit';
import automotivoThumb from 'assets/categorias/thumbnail/automotivo.png';
import hamb from 'assets/categorias/thumbnail/hamb.png';
import hambfundo from 'assets/categorias/header/hambfundo.png';
import escritorioThumb from 'assets/categorias/thumbnail/escritorio.png';
import jogosThumb from 'assets/categorias/thumbnail/jogos.png';
import somThumb from 'assets/categorias/thumbnail/som.png';
import automotivoHeader from 'assets/categorias/header/automotivo.png';
import eletronicosHeader from 'assets/categorias/header/eletronicos.png';
import escritorioHeader from 'assets/categorias/header/escritorio.png';
import jogosHeader from 'assets/categorias/header/jogos.png';
import somHeader from 'assets/categorias/header/som.png';
import refri from 'assets/categorias/header/refris.png';
import sucos from 'assets/categorias/thumbnail/sucos.png';

const initialState = [{
  nome: 'Burguers',
  thumbnail: hamb,
  header: hambfundo,
  id: 'hamburguers',
  descricao: 'Os melhores Hamburguers da cidade estão aqui!'
}, {
  nome: 'Bebidas',
  thumbnail: sucos,
  header: refri,
  id: 'automotivos',
  descricao: 'Os melhores Sucos e Refrigerantes gelados(ou não), disponíveis pra você! '
},/* {
  nome: 'Jogos',
  thumbnail: jogosThumb,
  header: jogosHeader,
  id: 'jogos',
  descricao: 'Adquira os consoles e jogos mais atuais do mercado !'
}, {
  nome: 'Escritório',
  thumbnail: escritorioThumb,
  header: escritorioHeader,
  id: 'escritorio',
  descricao: 'Tudo para o que escritório ficar incrível!'
}, {
  nome: 'Som e imagem',
  thumbnail: somThumb,
  header: somHeader,
  id: 'som',
  descricao: 'Curta suas músicas e seus filmes com a melhor qualidade!'
}*/];

const categoriasSlice = createSlice({
  name: 'categorias',
  initialState,
});

export default categoriasSlice.reducer;