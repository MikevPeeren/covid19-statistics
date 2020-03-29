// React
import React from 'react';

// External
import classNames from 'classnames';

// CSS
import './StatisticCard.scss';

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

// Icons
import { BugReport, ReportOutlined, Security } from '@material-ui/icons';

// Constants
import {
  TOTAL_CONFIRMED,
  TOTAL_DEATHS,
  TOTAL_RECOVERED,
} from '../constants/general';

interface StatisticCardProps {
  title: string;
  dateString: string;
  statistic: number;
}

const StatisticCard: React.FC<StatisticCardProps> = (props) => {
  const { title, dateString, statistic } = props;

  /**
   * Parses the incoming dateString to a Date object.
   *
   * @param {string} dateString
   *
   * @returns {string}
   */
  const parseDateString = (): string => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };

    const date = new Date(Date.parse(dateString));
    return date.toLocaleDateString('nl-NL', options);
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
        <Typography variant="h3" component="p">
          {statistic}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
