import React from 'react'
import NotificationHeaderSection from '../OtherPage/NotificationHeaderSection'
import NotificationLegend from '../OtherPage/NotificationLegend'
import MonthlyMessageDetailsChart from '../../Component/MyChart/MonthlyMessageDetailsChart'

function ConfigureChannelContainer() {
    const janToDecData = [
        { month: "Jan", bar1: 180, bar2: 150, bar3: 120, bar4: 100 },
        { month: "Feb", bar1: 200, bar2: 170, bar3: 130, bar4: 110 },
        { month: "Mar", bar1: 210, bar2: 160, bar3: 140, bar4: 120 },
        { month: "Apr", bar1: 190, bar2: 180, bar3: 150, bar4: 130 },
        { month: "May", bar1: 220, bar2: 190, bar3: 170, bar4: 140 },
        { month: "Jun", bar1: 230, bar2: 200, bar3: 180, bar4: 160 },
        { month: "Jul", bar1: 240, bar2: 210, bar3: 190, bar4: 170 },
        { month: "Aug", bar1: 250, bar2: 220, bar3: 200, bar4: 180 },
        { month: "Sep", bar1: 260, bar2: 230, bar3: 210, bar4: 190 },
        { month: "Oct", bar1: 270, bar2: 240, bar3: 220, bar4: 200 },
        { month: "Nov", bar1: 280, bar2: 250, bar3: 230, bar4: 210 },
        { month: "Dec", bar1: 290, bar2: 260, bar3: 240, bar4: 220 },
    ];
  return (
    <div>
    <NotificationHeaderSection />
    <NotificationLegend />
    <div className="w-full ">
    {/* <MonthlyMessageChart data={janToDecData} yAxisDomain={[0, 400]} /> */}
    <MonthlyMessageDetailsChart data={janToDecData} yAxisDomain={[0, 400]} containerHeight="100%" />
    {/* <ReportContainer /> */}
    </div>
    

    </div>
  )
}

export default ConfigureChannelContainer