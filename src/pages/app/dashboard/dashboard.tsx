import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-cards'
import { MonthCanceledOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-cards'
import { MonthRevenueCard } from './month-revenue-card'

export function DashBoard() {
  return (
    <>
      <Helmet title="Deshboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>
      </div>
    </>
  )
}
