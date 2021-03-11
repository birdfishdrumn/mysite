import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { businessQuestion,fuurinQuestion,historyQuestion} from "./questionData";
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { Description } from "../../style/GlobalStyle";
 //   [theme.breakpoints.up('sm')]: {
    //   width:"90%",
    // },

const Accordion = withStyles({
  root: {

    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    width: "90%",
    maxWidth:1024,

    margin:"0 auto",
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },

  },
  expanded: {},
})(MuiAccordion);

// アコーディオンメニュー内の文章
const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const  QuestionAccordion = ({business,fuurin}) =>{
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  let data=""

  if (business) {
  data = businessQuestion
  } else if(fuurin){
  data  = fuurinQuestion
  } else {
    data = historyQuestion
}
//   switch (data) {
//     case  business :
//       data = businessQuestion;
//       break;
//   case fuurin: // foo は 0 であり、基準を満たすためでこのブロックを実行する
//       data = fuurinQuestion;
//        break;
//     // メモ: ここに break を置くのを忘れている
//     case history: // 'case 0:' に break 文がないため、この case も実行される
//       data = historyQuestion;// この break に当たるため、'case 2:' には続かない
//        break;

// }

  return (
    <div>
      {data && data.map(item => (
        <Accordion key={item.id} square expanded={expanded === item.id} onChange={handleChange(item.id)}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography><ContactSupportIcon/> {item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>

              <QuestionAnswerIcon />
              <Description left style={{padding:"0 5px"}}dangerouslySetInnerHTML={{ __html: item.description}} />


          </AccordionDetails>
        </Accordion>
      ))}


    </div>
  );
}

export default QuestionAccordion
