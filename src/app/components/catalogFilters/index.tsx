import styled from 'styled-components';
import { Select } from './../select';
import { TextInput } from './../textInput';
import { FaSearch } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { Col, Row } from '../grid';
import FilterItem from '../filterItemAccordion';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';

interface EnterpriseFiltersProps {
  citiesOptions: { label: string; value: string }[];
  situationOptions: { label: string; value: string }[];
  onCityChange: (selectedValue: string) => void;
  onSituationChange: (selectedValue: string) => void;
  onSearchChange: (textValue: string) => void;
}

export const EnterpriseFilters: React.FC<EnterpriseFiltersProps> = ({
  citiesOptions,
  situationOptions,
  onCityChange,
  onSituationChange,
  onSearchChange
}) => {

    const isLargeScreen = useScreenSize(768);

    const [isOptionsListVisible, setIsOptionsListVisible] = useState(false);
    const [showClear, setShowClear] = useState(false);

    const toggleOptionsList = () => {
      setIsOptionsListVisible(!isOptionsListVisible);

      if(!showClear){
        setTimeout(() => {
            setShowClear(!isOptionsListVisible);
          }, 300);
      }else{
        setShowClear(!isOptionsListVisible);
      }

    };

  return (
    <>
      {isLargeScreen.isLargeScreen ? (
        <InputContainer>
          <Row>
            <Col flex={2}>
              <Select
                options={citiesOptions}
                onChange={onCityChange}
              />
            </Col>
            <Col flex={2}>
              <Select
                options={situationOptions}
                onChange={onSituationChange}
              />
            </Col>
            <Col flex={3}>
              <TextInput
                placeholder="PESQUISAR"
                icon={<FaSearch />}
                onChange={onSearchChange}
              />
            </Col>
          </Row>
        </InputContainer>
      ) : (
        <FilterMobileContainer>
          <FilterButton
            onClick={toggleOptionsList}
            open={isOptionsListVisible}
          >
            <span>
              Filtro<FiFilter />
            </span>
            {showClear ? <Clear>Limpar filtros</Clear> : <></>}
          </FilterButton>
          <OptionsList
            className={isOptionsListVisible ? 'slideRight' : 'slideLeft'}
          >
            <FilterItem label={citiesOptions[0].label} options={citiesOptions} />
            <FilterItem label={situationOptions[0].label} options={situationOptions} />
            <FilterItemSearch className="search">
              <TextInput
                placeholder="PESQUISAR"
                icon={<FaSearch />}
                onChange={onSearchChange}
              />
            </FilterItemSearch>
          </OptionsList>
        </FilterMobileContainer>
      )}
    </>
  );
};

const InputContainer = styled.div`
    max-width:660px;
`;

const FilterButton = styled.div<{open: boolean}>`
  height:40px;
  border:solid 1px var(--background-primary);
  transition: 0.2s ease-in-out 100ms;
  width:${props => props.open ? 262 : 100}px;
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:${props => props.open ? 'space-between' : 'flex-start'};
  margin:0 10px;
  margin-top:10px;
  padding:0 20px;

  span{
    display:flex;
    flex-direction:row;
    gap:5px;
    align-items:center;
  }
`;

const OptionsList = styled.div`
  position:absolute;
  z-index:10;
  background-color:var(--background-secondary);
  width:280px;
  transition: transform 0.3s ease-in-out;
  border:solid 1px var(--background-primary);
  padding:20px 30px;

  &.slideRight {
    transform: translateX(-8px);
  }

  &.slideLeft {
    transform: translateX(-110%);
  }
`;

const FilterMobileContainer = styled.div`
  position:relative;
`;

const FilterItemSearch = styled.div`
    &.search {
        margin:30px 0 10px;
    }
`;

const Clear = styled.a`
    font-size:12px;
    color:var(--text-primary);
    text-decoration:underline;
    width:80px;
`;