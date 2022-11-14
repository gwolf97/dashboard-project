import {Box, useTheme, Typography} from "@mui/material"
import Header from "../../components/Header"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {tokens} from "../../theme"

const Faq = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)

  return (
    <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page"/>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    Another Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    Your favorite question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    An Important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    A Crazy question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>


        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography color={colors.greenAccent[500]} variant="h5" >
                    The final question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas incidunt ex qui hic porro itaque velit eius sit deleniti dicta architecto ut, minima harum sequi beatae excepturi cupiditate voluptatem earum!
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default Faq