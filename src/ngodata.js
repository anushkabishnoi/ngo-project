const items = [
    { id: 1, name: 'Andhra Pradesh', state: 'Andhra Pradesh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/6281/28/1' },
    { id: 2, name: 'Arunachal Pradesh', state: 'Arunachal Pradesh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/558/12/1' },
    { id: 3, name: 'Assam', state: 'Assam', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/2843/18/1' },
    { id: 4, name: 'Bihar', state: 'Bihar', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/6089/10/1' },
    { id: 5, name: 'Chhattisgarh', state: 'Chhattisgarh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/251/4/1' },
    { id: 6, name: 'Goa', state: 'Goa', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/320/30/1' },
    
    { id: 7, name: 'Gujarat', state: 'Gujarat', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/8060/24/1' },
    { id: 8, name: 'Haryana', state: 'Haryana', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/4304/6/1' },
    { id: 9, name: 'Himachal Pradesh', state: 'Himachal Pradesh', link: 'https://www.example.com/himachal-pradesh' },
    { id: 10, name: 'Jharkhand', state: 'Jharkhand', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/994/2/1' },
    { id: 11, name: 'Karnataka', state: 'Karnataka', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/9933/29/1' },
    { id: 12, name: 'Kerala', state: 'Kerala', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/4732/32/1' },
    { id: 13, name: 'Madhya Pradesh', state: 'Madhya Pradesh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/7916/23/1' },
    { id: 14, name: 'Maharashtra', state: 'Maharashtra', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/24139/27/1' },
    { id: 15, name: 'Manipur', state: 'Manipur', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/2794/14/1' },
    { id: 16, name: 'Meghalaya', state: 'Meghalaya', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/358/17/1' },
    { id: 17, name: 'Mizoram', state: 'Mizoram', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/300/15/1' },
    { id: 18, name: 'Nagaland', state: 'Nagaland', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/519/13/1' },
    { id: 19, name: 'Odisha', state: 'Odisha', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/4959/21/1' },
    { id: 20, name: 'Punjab', state: 'Punjab', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/2266/3/1' },
    { id: 21, name: 'Rajasthan', state: 'Rajasthan', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/6611/8/1' },
    { id: 22, name: 'Sikkim', state: 'Sikkim', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/153/11/1' },
    { id: 23, name: 'Tamil Nadu', state: 'Tamil Nadu', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/11876/33/1' },
    { id: 24, name: 'Telangana', state: 'Telangana', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/571/16/1' },
    { id: 25, name: 'Tripura', state: 'Tripura', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/571/16/1' },
    { id: 26, name: 'Uttar Pradesh', state: 'Uttar Pradesh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/25417/9/1' },
    { id: 27, name: 'Uttarakhand', state: 'Uttarakhand', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/2531/5/1' },
    { id: 28, name: 'West Bengal', state: 'West Bengal', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/12914/19/1' },
    { id: 29, name: 'Andaman and Nicobar Islands', state: 'Andaman and Nicobar Islands', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/181/35/1' },
    { id: 30, name: 'Chandigarh', state: 'Chandigarh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/251/4/1' },
    { id: 32, name: 'Lakshadweep', state: 'Lakshadweep', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/7/31/1' },
    { id: 33, name: 'Delhi', state: 'Delhi', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/13346/7/1' }, 
    { id: 34, name: 'Item 34', state: 'Ladakh', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/193/37/1' },
    { id: 35, name: 'Item 35', state: 'Lakshadweep', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/7/31/1' },
    { id: 36, name: 'Item 36', state: 'Puducherry', link: 'https://ngodarpan.gov.in/index.php/home/statewise_ngo/355/34/1' },
  ];
  
  export default items;

  