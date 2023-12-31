import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowUpWideShort,
  faCircleCheck,
  faCircleExclamation,
  faCircleHalfStroke,
  faCircleNotch,
  faCircleXmark,
  faEllipsis,
  faSignal,
  faVolumeLow,
  faVolumeUp 
} from '@fortawesome/free-solid-svg-icons';

const priorityLevels = {
  0: 'No priority',
  1: 'Low',
  2: 'Medium',
  3: 'High',
  4: 'Urgent'
};

const priorityIcons = {
  0: <FontAwesomeIcon icon={faEllipsis} />,
  1: <FontAwesomeIcon icon={faVolumeLow} />,
  2: <FontAwesomeIcon icon={faVolumeUp} />,
  3: <FontAwesomeIcon icon={faSignal} />,
  4: <FontAwesomeIcon icon={faCircleExclamation} />
}

const statusLevels = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled']
const statusIcons = {
  'Backlog': <FontAwesomeIcon icon={faArrowUpWideShort} />,
  'Todo': <FontAwesomeIcon icon={faCircleNotch} />,
  'In progress': <FontAwesomeIcon icon={faCircleHalfStroke} />,
  'Done': <FontAwesomeIcon icon={faCircleCheck} />,
  'Cancelled': <FontAwesomeIcon icon={faCircleXmark} />

}

const profileColors = ["#512DA8", "#D32F2F", "#FFA000", "#388E3C", "#1976D2"];


export { 
  priorityLevels,
  statusLevels,
  priorityIcons,
  statusIcons,
  profileColors
};