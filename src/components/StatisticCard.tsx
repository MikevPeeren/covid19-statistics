// React
import React from 'react';

// CSS
import './StatisticCard.scss';

// External
import classNames from 'classnames';

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

// Icons
import { BugReport, ReportOutlined, Security } from '@material-ui/icons';

// Constants
import { TOTAL_CONFIRMED, TOTAL_DEATHS, TOTAL_RECOVERED, DATE_PARSING_OPTIONS_GLOBAL } from '../constants/general';

// Interface
interface IStatisticCardProps {
  title: string;
  dateString: string;
  statistic: number;
}

const StatisticCard: React.FC<IStatisticCardProps> = (props) => {
  const { title, dateString, statistic } = props;

  /**
   * Parses the incoming dateString to a Date object.
   *
   * @param {string} dateString
   *
   * @returns {string}
   */
  const parseDateString = (): string => {
    const date = new Date(Date.parse(dateString));
    //@ts-ignore
    return date.toLocaleDateString('nl-NL', DATE_PARSING_OPTIONS_GLOBAL);
  };

  /**
   * Checks which Avatar Icon to get and returns it.
   *
   * @returns {BugReport || ReportOutlined || Security}
   */
  const getAvatarIcon = () => {
    return title === TOTAL_CONFIRMED ? (
      <BugReport />
    ) : title === TOTAL_DEATHS ? (
      <ReportOutlined />
    ) : title === TOTAL_RECOVERED ? (
      <Security />
    ) : (
      ''
    );
  };

  // Parsing incoming DateString
  const date = parseDateString();

  // Dynamic rendering of the Icon & Classes happens here.
  const avatarIcon = getAvatarIcon();

  const avatarClassNames = classNames('StatisticCard__Avatar', {
    'StatisticCard__Avatar--confirmed': title === TOTAL_CONFIRMED,
    'StatisticCard__Avatar--deaths': title === TOTAL_DEATHS,
    'StatisticCard__Avatar--recovered': title === TOTAL_RECOVERED,
  });

  const typographyClassNames = classNames('StatisticCard__Content', {
    'StatisticCard__Content--confirmed': title === TOTAL_CONFIRMED,
    'StatisticCard__Content--deaths': title === TOTAL_DEATHS,
    'StatisticCard__Content--recovered': title === TOTAL_RECOVERED,
  });

  return (
    <Card className="StatisticCard" variant="outlined">
      <CardHeader
        classes={{ avatar: avatarClassNames }}
        avatar={avatarIcon}
        title={title}
        subheader={`Updated at: ${date}`}
      />
      <CardContent classes={{ root: typographyClassNames }}>
        <Typography variant="h4" component="p">
          {statistic}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
