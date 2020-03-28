// React
import React from 'react';

// CSS
import './StatisticCard.scss';

// Material UI
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

// Icons
import { AccessAlarm } from '@material-ui/icons';

interface StatisticCardProps {
  dateString: string;
}
const StatisticCard: React.FC<StatisticCardProps> = (props) => {
  const { dateString } = props;

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  const date = new Date(Date.parse(dateString));

  return (
    <Card className="StatisticCard">
      <CardHeader
        avatar={<AccessAlarm />}
        title="Lorem Ipsum"
        subheader={date.toLocaleDateString('nl-NL', options)}
      ></CardHeader>
      <CardContent>
        <Typography variant="h3" color="error" component="p">
          100000
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatisticCard;
