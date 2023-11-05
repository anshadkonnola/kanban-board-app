import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faColonSign, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const priorityLevels = {
  0: 'No priority',
  1: 'Low',
  2: 'Medium',
  3: 'High',
  4: 'Urgent'
};

const priorityIcons = {
  0: <FontAwesomeIcon icon={faEllipsis} />,
  1: <FontAwesomeIcon icon={faCircleDot} />,
  2: <FontAwesomeIcon icon={faColonSign} />,
  3: <FontAwesomeIcon icon={faEllipsis} />,
  4: <FontAwesomeIcon icon={faEllipsis} />
}

const statusLevels = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled']
const statusIcons = {
  'Backlog': <FontAwesomeIcon icon={faEllipsis} />,
  'Todo': <FontAwesomeIcon icon={faEllipsis} />,
  'In progress': <FontAwesomeIcon icon={faEllipsis} />,
  'Done': <FontAwesomeIcon icon={faEllipsis} />,
  'Cancelled': <FontAwesomeIcon icon={faEllipsis} />

}

const profileColors = ["#512DA8", "#D32F2F", "#FFA000", "#388E3C", "#1976D2"];


export { 
  priorityLevels,
  statusLevels,
  priorityIcons,
  statusIcons,
  profileColors
};