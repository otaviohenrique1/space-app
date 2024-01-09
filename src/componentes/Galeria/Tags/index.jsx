import tags from "./tags.json";
import styled from "styled-components";

const TagTitulo = styled.h3`
  color: #D9D9D9;
  font-size: 24px;
  margin: 0;
  width: 219px;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #FFFFFF;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #C98CF1;
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 56px;
`;

const Tags = () => {
  return (
    <TagContainer>
      <TagTitulo>Busque por tags:</TagTitulo>
      {tags.map((tag) => <Tag key={tag.id}>{tag.titulo}</Tag>)}
    </TagContainer>
  )
}

export default Tags;