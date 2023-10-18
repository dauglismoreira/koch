import styled from 'styled-components';
import { Select } from './../select';
import { TextInput } from './../textInput';
import { FaSearch } from 'react-icons/fa';
import { FiFilter } from 'react-icons/fi';
import { AiOutlineClose } from 'react-icons/ai';
import { Col, Row } from '../grid';
import FilterItem from '../filterItemAccordion';
import { useState } from 'react';
import { BsArrowLeft } from "react-icons/bs";

interface EnterpriseFiltersProps {
  citiesOptions: any;
  situationOptions: any;
  onCityChange: (selectedValue: string) => void;
  onSituationChange: (selectedValue: string) => void;
  onSearchChange: (textValue: string) => void;
  clearFilter: number
}

export const EnterpriseFilters: React.FC<EnterpriseFiltersProps> = ({
  citiesOptions,
  situationOptions,
  onCityChange,
  onSituationChange,
  onSearchChange,
  clearFilter
}) => {

  console.log()

    const [showModal, setShowModal] = useState(false);
    const [isOptionsListVisible, setIsOptionsListVisible] = useState(true);
    const [isTextInputVisible, setTextInputVisible] = useState(false);
    const [showClear, setShowClear] = useState(false);

    const toggleOptionsList = () => {
      setShowModal(!showModal);
      setTextInputVisible(false)
      setIsOptionsListVisible(true)

      if(!showClear){
        setTimeout(() => {
            setShowClear(!showModal);
          }, 300);
      }else{
        setShowClear(!showModal);
      }

    };

    const toggleTextSearch = () => {
      setTextInputVisible(!isTextInputVisible);
      setIsOptionsListVisible(!isOptionsListVisible);
    };

    const CityHandleItemClick = (value: string) => {
        onCityChange(value)
    };

    const SituationHandleItemClick = (value: string) => {
        onSituationChange(value)
    };

    function clearAllURLParams() {
      window.history.replaceState({}, document.title, window.location.pathname);
    }

  return (
    <FiltersContainer>
        <InputContainer className="no-mobile-available">
          <Row>
            <Col flex={2}>
              <Select
                label={'Cidade'}
                options={citiesOptions}
                onChange={onCityChange}
                clearFilter={clearFilter}
              />
            </Col>
            <Col flex={2}>
              <Select
                label={'Situação'}
                options={situationOptions}
                onChange={onSituationChange}
                clearFilter={clearFilter}
              />
            </Col>
            <Col flex={3}>
              <TextInput
                placeholder="PESQUISAR"
                icon={<FaSearch />}
                onChange={onSearchChange}
                param='search'
                open={showModal}
                clearFilter={clearFilter}
              />
            </Col>
          </Row>
        </InputContainer>
        <FilterMobileContainer className="no-desktop-available">
          <FilterButtonContainer open={showModal}>
            <FilterButton
              onClick={toggleOptionsList}
            >
              <span>
                Filtro{showClear ? <AiOutlineClose /> : <FiFilter />}
              </span>
            </FilterButton>
            <FilterClearContainer>
              {showClear ? <Clear onClick={() => {
                  clearAllURLParams()
                  setShowModal(!showModal)
                  setShowClear(!showModal)
                  setTextInputVisible(false)
                  onCityChange('')
                  onSituationChange('')
                  onSearchChange('')
                }}>Limpar filtros</Clear> : <></>}
              {showClear && <TextSearchActive
                onClick={toggleTextSearch}
                active={isTextInputVisible}
              >
                  <FaSearch />
                </TextSearchActive>}
            </FilterClearContainer>
          </FilterButtonContainer>

            <OptionsList
              className={showModal ? 'slideRight' : 'slideLeft'}
            >
              <SelectsList className={isOptionsListVisible ? 'slideRight' : 'slideLeft'}>
                <FilterItem
                  label={ 'Cidade'}
                  options={citiesOptions}
                  onItemClick={CityHandleItemClick} 
                  param='city'
                  open={showModal}
                />
                <FilterItem
                  label={ 'Situação'}
                  options={situationOptions}
                  onItemClick={SituationHandleItemClick} 
                  param='status'
                  open={showModal}
                />
                <FilterItemSearch className="search"></FilterItemSearch>
              </SelectsList>
            </OptionsList>

            <TextInputContainer
              className={isTextInputVisible ? 'slideRight' : 'slideLeft'}
            >
              <span onClick={toggleTextSearch}><BsArrowLeft/>Voltar</span>
              <TextInput
                placeholder="PESQUISAR"
                icon={<FaSearch />}
                onChange={onSearchChange}
                param='textFilter'
                open={showModal}
                clearFilter={clearFilter}
              />
            </TextInputContainer>

        </FilterMobileContainer>
    </FiltersContainer>
  );
};

const FiltersContainer = styled.div`
  .no-mobile-available{
    @media(max-width:768px){
      display:none;
    }
  }

  .no-desktop-available{
    @media(min-width:768px){
      display:none;
    }
  }
`;

const InputContainer = styled.div`
    max-width:660px;
`;

const FilterButton = styled.div`
  height:40px;
  transition: 0.2s ease-in-out 100ms;
  display:flex;
  flex-direction:row;
  align-items:center;
  gap:10px;
  width:100px;então

  span{
    display:flex;
    flex-direction:row;
    gap:5px;
    align-items:center;
  }
`;

const FilterButtonContainer = styled.div<{open: boolean}>`
  height:40px;
  border:solid 1px var(--background-primary);
  transition: 0.2s ease-in-out 100ms;
  width:${props => props.open ? 'calc(100% - 20px)' : '100px'};
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
  width:calc(100% - 20px);
  transition: transform 0.3s ease-in-out;

  &.slideRight {
    transform: translateX(10px);
  }

  &.slideLeft {
    transform: translateX(-110%);
  }
`;

const SelectsList = styled.div`
  background-color:var(--background-secondary);
  border:solid 1px var(--background-primary);
  transition: transform 0.3s ease-in-out;
  padding:10px 30px 0;

  &.slideRight {
    transform: translateX(0px);
  }

  &.slideLeft {
    transform: translateX(-120%);
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

const FilterClearContainer = styled.div`
    width:calc(100% - 100px);
    display:flex;
    justify-content:flex-end;
    gap:20px;
    height:100%;
    align-items:center;
`;

const Clear = styled.a`
    font-size:var(--buttons-size);
    color:var(--text-primary);
    text-decoration:underline;
    white-space:nowrap;
`;

const TextSearchActive = styled.div<{active: boolean}>`
    border-left:solid 1px var(--background-primary);
    margin:0px -20px 0 0;
    height:100%;
    width:50px;
    display:flex;
    align-items:center;
    justify-content:center;
    transition:0.2s;
    background-color:${props => props.active ? 'var(--background-primary)' : ''};

    svg {
      color:${props => props.active ? 'var(--text-white)' : 'var(--text-primary)'};
    }
`;

const TextInputContainer = styled.div`
  position:absolute;
  z-index:10;
  background-color:var(--background-secondary);
  width:calc(100% - 20px);
  transition: transform 0.3s ease-in-out;
  border:solid 1px var(--background-primary);
  padding:10px 30px 20px;

  &.slideRight {
    transform: translateX(10px);
  }

  &.slideLeft {
    transform: translateX(-110%);
  }

  span{
    display:flex;
    align-items:center;
    gap:10px;
    margin-bottom:15px;
  }
`;