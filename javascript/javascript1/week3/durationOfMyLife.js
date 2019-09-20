const seriesDurations = [
    {
      title: 'The Vampire Diaries',
      days: 8,
      hours: 3,
      minutes: 33  
    },
    {
      title: 'Vikings',
      days: 3,
      hours: 1,
      minutes: 0
    },
    {
      title: 'The Game of Thrones',
      days: 11,
      hours: 4,
      minutes: 33
    }
  ];

  function durationOfMyLifeSpentOnSeries(seriesWatched) {
    let totalPercentOfLifeSpent = 0;
    for(let i=0;i<seriesWatched.length;i++) {
        const numOfYearsSpent = seriesWatched[i].days/365 + seriesWatched[i].hours/(24*365) + seriesWatched[i].minutes/(60*24*365);
        console.log(numOfYearsSpent);
        const percentOfLifeSpent = (numOfYearsSpent*100/80);
        console.log(seriesWatched[i].title + " took "  + Math.round(percentOfLifeSpent *100)/100 
         + "% of my life" );
         totalPercentOfLifeSpent= totalPercentOfLifeSpent + percentOfLifeSpent;
    }
    console.log("In total that is  "  + Math.round(totalPercentOfLifeSpent *100)/100 
    + "% of my life" );
  }

  console.log(durationOfMyLifeSpentOnSeries(seriesDurations));

  