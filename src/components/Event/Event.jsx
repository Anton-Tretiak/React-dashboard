import PropTypes from "prop-types";
import { Container, Header, Info, Icon } from "./Event.styled";
import {
  FaMapMarkerAlt,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
} from "react-icons/fa";
import { formatEventDuration, formatEventStart } from "../../utils/index";

export const Event = ({ name, location, speaker, start, end }) => {
  const formattedDateStyle = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Container>
      <Header>{name}</Header>
      <Info>
        <Icon>
          <FaMapMarkerAlt />
        </Icon>
        {location}
      </Info>
      <Info>
        <Icon>
          <FaUserAlt />
        </Icon>
        {speaker}
      </Info>
      <Info>
        <Icon>
          <FaCalendarAlt />
        </Icon>
        {formattedDateStyle}
      </Info>
      <Info>
        <Icon>
          <FaClock />
        </Icon>
        {duration}
      </Info>
    </Container>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
