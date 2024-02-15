import React from 'react';
import ProductCard from './ProductCard';

const Product = () => {
  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-6 gap-8'>
        <ProductCard title={'Payroll Module'} imgUrl={'/payroll.png'} description={'Manage employee salaries, wages, bonuses, and deductions efficiently with our comprehensive payroll solution.'} />
        <ProductCard title={'H.R Module Time Attendance Module'} imgUrl={'/hr.png'} description={'Track employee attendance, manage leaves, and streamline HR processes with our time and attendance management module.'} />
        <ProductCard title={'Compliance Modules'} imgUrl={'/compliance.png'} description={'Ensure regulatory compliance and minimize legal risks with our comprehensive compliance modules tailored to your industry.'} />
        <ProductCard title={'Maintenance Management Module'} imgUrl={'/maintenance.png'} description={'Keep your equipment and facilities running smoothly with our maintenance management module, enabling proactive maintenance scheduling and tracking.'} />
        <ProductCard title={'Smart Management Module'} imgUrl={'/smart.png'} description={'Leverage smart technologies to optimize resource allocation, improve decision-making, and enhance operational efficiency.'} />
        <ProductCard title={'Canteen Management'} imgUrl={'/canteen.png'} description={'Simplify canteen operations, manage menus, orders, and payments seamlessly with our canteen management solution.'} />
        <ProductCard title={'Weaving ERP System'} imgUrl={'/weaving.png'} description={'Streamline weaving processes, manage orders, inventory, and production schedules effectively with our dedicated weaving ERP system.'} />
        <ProductCard title={'Spinning ERP System'} imgUrl={'/spinning.png'} description={'Optimize spinning operations, track raw materials, monitor production, and manage quality control with our spinning ERP system.'} />
        <ProductCard title={'Vocational Program System'} imgUrl={'/vocational.png'} description={'Facilitate vocational training programs, track student progress, and manage curriculum effectively with our vocational program system.'} />
        <ProductCard title={'Tax Slab Module'} imgUrl={'/tax.png'} description={'Ensure accurate tax calculations, compliance with tax regulations, and seamless tax reporting with our tax slab module.'} />
        <ProductCard title={'Raw Inventory Module'} imgUrl={'/inventory.png'} description={'Manage raw material inventory, track stock levels, and optimize procurement processes with our raw inventory module.'} />
        <ProductCard title={'Store Inventory Module'} imgUrl={'/store.png'} description={'Streamline store operations, track inventory movements, and automate replenishment processes with our store inventory module.'} />
        <ProductCard title={'Gl Module'} imgUrl={'/gi.png'} description={'Gain insights into financial transactions, streamline accounting processes, and ensure compliance with our general ledger module.'} />
        <ProductCard title={'Procurement Module'} imgUrl={'/procurement.png'} description={'Streamline procurement workflows, manage vendor relationships, and optimize purchasing processes with our procurement module.'} />
        <ProductCard title={'Sale Module'} imgUrl={'/sales.png'} description={'Boost sales performance, manage customer relationships, and track sales activities with our comprehensive sales module.'} />
        <ProductCard title={'Fixed Assets Module'} imgUrl={'/fixed.png'} description={'Track fixed assets, manage depreciation, and optimize asset utilization with our fixed assets module.'} />
        <ProductCard title={'AC Payable Module'} imgUrl={'/ac.png'} description={'Streamline accounts payable processes, manage vendor payments, and track expenses efficiently with our accounts payable module.'} />
        <ProductCard title={'AC Receivable Module'} imgUrl={'/ac1.png'} description={'Automate accounts receivable processes, track customer invoices, and improve cash flow management with our accounts receivable module.'} />
        <ProductCard title={'Finished Goods Inventory Module'} imgUrl={'/finish.png'} description={'Manage finished goods inventory, track stock levels, and optimize order fulfillment processes with our finished goods inventory module.'} />
        <ProductCard title={'Point Of Sale Module'} imgUrl={'/pos.png'} description={'Streamline point-of-sale transactions, manage sales inventory, and enhance customer checkout experiences with our point-of-sale module.'} />
        <ProductCard title={'Watch Dog Module'} imgUrl={'/watch.png'} description={'Monitor and manage security incidents, track suspicious activities, and ensure data protection with our watch dog module.'} />
        <ProductCard title={'School Management Module'} imgUrl={'/school.png'} description={'Simplify school administration, manage student records, and streamline academic processes with our school management module.'} />
        <ProductCard title={'Hospital Management Module'} imgUrl={'/hospital.png'} description={'Improve patient care, optimize hospital operations, and streamline administrative tasks with our hospital management module.'} />
        <ProductCard title={'Courier Management Module'} imgUrl={'/courier.png'} description={'Automate courier logistics, track shipments, and optimize delivery routes with our courier management module.'} />
      </div>
    </div>
  );
};

export default Product;
