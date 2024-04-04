import React, { useEffect, useState } from 'react';
import feedback from "../assets/icons/feedback.svg";
import { FeedbackBoxContainer, FeedbackButton } from '../assets/styled-components/FeedbackContainer';
import { FlexContainer, Image, StyledText } from '../assets/styled-components/global/GlobalStyles';
import { DropdownItem, DropdownList, SelectButton } from '../assets/styled-components/FilterContainer';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TextAreaContainer } from '../assets/styled-components/OrderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { feedbackSubmit } from '../store/slices/feedbackSlice';

const Feedback = () => {
    const [displayDropdown,setDisplayDropdown] = useState(false);
    const feedbackOptions = ["Bugs", "Feedback", "Query"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFeedback, setSelectedFeedback] = useState("");
    const [feedbackValue,setFeedbackValue]=useState("");
    const token = useSelector((state)=>state.currentAuthUser.authToken);
    const dispatch=useDispatch();
    useEffect(() => {
      if (feedbackValue.length!==20 && selectedFeedback!=="") {
          dispatch(feedbackSubmit({type:selectedFeedback,description:feedbackValue,token})); // Dispatch action when both values are filled
      }
  }, [feedbackValue, selectedFeedback, token]);

    const handleProductClick = ( )=>{
        setDisplayDropdown(!displayDropdown);
    }
    const toggleDropdown = ()=>{
      setIsOpen(!isOpen);
    };
    
    const handleFeedbackChange = (event) => {
      setFeedbackValue(event.target.value);
    };

    const handleFeedbackSelect = (feedback) => {
      setSelectedFeedback(feedback);
      setIsOpen(false); 
     };

    
  return (
    <div>
       <FeedbackButton

          onClick={handleProductClick}
        >
          <Image src={feedback} height="20px"/>
        </FeedbackButton>
        {displayDropdown && 
         <FeedbackBoxContainer>
            <FlexContainer direction="column" gap="0.5rem">
            <StyledText fontSize="20px" fontWeight="600" androidFontSize="16px" >Type of feedback</StyledText>
             <SelectButton width="250px" height="2rem" borderRadius="5px" color="#797979"  backgroundColor="#F3F3F3" androidwidth="160px" value={selectedFeedback} onClick={toggleDropdown}>
             Choose the type&nbsp;&nbsp;&nbsp;<FontAwesomeIcon icon={faAngleDown} />
             {isOpen && (
                        <DropdownList top="31%" width="250px">
                            {feedbackOptions.map((option, index) => (
                                <React.Fragment key={index}>
                                    <DropdownItem onClick={() => handleFeedbackSelect(option)}>{option}</DropdownItem>
                                    <hr />
                                </React.Fragment>
                            ))}
                        </DropdownList>
                    )}
             </SelectButton >
             <StyledText fontSize="20px" fontWeight="600" androidFontSize="16px" >Feedback</StyledText>
             <TextAreaContainer
               value={feedbackValue}
               onChange={handleFeedbackChange}
             />
            </FlexContainer>
         </FeedbackBoxContainer>
        }
    </div>
  )
}

export default Feedback
