let input = [
    `Telerik Academy`,
    `31 Al. Malinov, Sofia`,
    `+359 888 55 55 555`,
    ``,
    `http://telerikacademy.com/`,
    `Martin`,
    `Veshev`,
    `25`,
    `+359 2 981 981`,
];
 
let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

let companyName = gets();
let addressOfCompany = gets();
let phoneOfCompany = gets();
let faxOfCompany = gets();
let web_site_of_company = gets();
let first_name_of_manager = gets();
let second_name_of_manager = gets();
let managerYears = Number(gets());
let managerNumber = gets();

print(`${companyName}`);
print(`Address: ${addressOfCompany}`);
print(`Tel. ${phoneOfCompany}`);
print(`Fax: ${faxOfCompany}`);
print(`Web site: ${web_site_of_company}`);
print(`Manager: ${first_name_of_manager} ${second_name_of_manager} (age: ${managerYears}, tel. ${managerNumber})`);
