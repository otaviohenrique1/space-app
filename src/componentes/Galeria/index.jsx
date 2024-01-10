import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import PropTypes from "prop-types";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
`;

const ImagensContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {

  return (
    <>
      <Tags />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
          <ImagensContainer>
            {fotos.map(foto => {
              return (
                <Imagem
                  key={foto.id}
                  foto={foto}
                  aoZoomSolicitado={aoFotoSelecionada}
                  aoAlternarFavorito={aoAlternarFavorito}
                />
              );
            })
            }
          </ImagensContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
}

Galeria.propTypes = {
  fotos: PropTypes.array,
  aoFotoSelecionada: PropTypes.any,
  aoAlternarFavorito: PropTypes.any,
}

export default Galeria;