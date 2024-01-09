import styled from "styled-components";
import PropTypes from "prop-types";

const ItemListaEstilizado = styled.li`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 30px;
  cursor: pointer;
  color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
  font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
  display: flex;
  align-items: center;
  gap: 22px;
`;

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
  return (
    <ItemListaEstilizado $ativo={ativo}>
      <img src={(ativo) ? iconeAtivo : iconeInativo} alt="icone do menu" />
      {children}
    </ItemListaEstilizado>
  )
}

ItemNavegacao.propTypes = {
  children: PropTypes.node,
  iconeAtivo: PropTypes.string,
  iconeInativo: PropTypes.string,
  ativo: PropTypes.bool
}

export default ItemNavegacao;