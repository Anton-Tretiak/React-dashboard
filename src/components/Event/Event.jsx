import PropTypes from 'prop-types';
import css from './Event.module.css';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from 'react-icons/fa';
import {formatEventDuration, formatEventStart} from '../../utils/index'

export const Event = ({name, location, speaker, start, end}) => {
  const formattedDateStyle = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
      <div className={css.event}>
        <h2 className={css.title}>{name}</h2>
        <p className={css.info}>
          <i className={css.icon}><FaMapMarkerAlt className={css.icon} /></i>
          {location}
        </p>
        <p className={css.info}>
          <i className={css.icon}><FaUserAlt className={css.icon} /></i>
          {speaker}
        </p>
        <p className={css.info}>
          <i className={css.icon}><FaCalendarAlt className={css.icon} /></i>
          {formattedDateStyle}
        </p>
        <p className={css.info}>
          <i className={css.icon}><FaClock className={css.icon} /></i>
          {duration}
        </p>
      </div>
  )
}

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired
}