//1004 Validations
function validateTabOne()//1004-Subject
{
	var validated = true;
	
	if(!validateTextFilled('property-address'))
		validated = false;
	if(!validateDropdown('country'))
		validated = false;
	if(!validateDropdown('state'))
		validated = false;
	if(!validateTextFilled('city'))
		validated = false;
	if(validateTextNumber('zip'))
		validated = false;
	if(!validateTextFilled('borrower'))
		validated = false;
	if(!validateTextFilled('owner-of-public-record'))
		validated = false;
	if(!validateTextFilled('legal-description'))
		validated = false;
	if(!validateTextNumber('assessors-parcel-num'))
		validated = false;
	if(!validateDropdown('tax-year'))
		validated = false;
	if(!validateTextNumber('re-taxes'))
		validated = false;
	if(!validateTextFilled('neighborhood-name'))
		validated = false;
	if(!validateTextFilled('map-reference'))
		validated = false;
	if(!validateTextFilled('census-tract'))
		validated = false;
	if(!validateDropdown('occupant'))
		validated = false;
	if(!validateDropdown('special-assessments'))
		validated = false;
	if(!validateDropdown('assignment-type'))
		validated = false;
	//validate assignment type other
	if(!validateTextFilled('lender-client'))
		validated = false;
	if(!validateTextFilled('address'))
		validated = false;
	if(!validateDropdown('currently-offered'))
		validated = false;
	if(!validateTextFilled('data-source-offer-price'))
		validated = false;
		
	return validated;
}

function validateTabTwo()//1004-Contract
{
	var validated = true;
	
	if(!validateRadio('ContracktChk1','contract-radio-group'))
		validated = false;
	if(!validateTextNumber('txtContractPrice'))
		validated = false;
	if(!validateDate('date-of-contract'))
		validated = false;
	if(!validateRadio('ContracktChk2','property-seller-radio-group'))
		validated = false;
	if(!validateTextFilled('data-sources'))
		validated = false;
	if(!validateRadio('ContracktChk3','financial-assistance-radio-group'))
		validated = false;
	if(!validateTextFilled('txtDescItmsPaid'))
		validated = false;
	
	return validated;
}

function validateTabThree()//1004-Neighborhood
{
	var validated = true;
	
	if(!validateRadio('NBChk1','location-radio-group'))
		validated = false;
	if(!validateRadio('NBChkBU','built-up-radio-group'))
		validated = false;
	if(!validateRadio('NBChkGrowth','growth-radio-group'))
		validated = false;
	if(!validateRadio('NBChkPTV','property-values-radio-group'))
		validated = false;
	if(!validateRadio('NBChkDS','demand-supply-radio-group'))
		validated = false;
	if(!validateRadio('NBChkMT','marketing-time-radio-group'))
		validated = false;
	if(!validateTextNumber('nbPrice'))
		validated = false;
	if(!validateTextNumber('nbYears'))
		validated = false;
	if(!validateRadio('NBChkOu','price-radio-group'))
		validated = false;
	if(!validateTextNumber('nbOneUnit'))
		validated = false;
	if(!validateTextNumber('nb2to4Unit'))
		validated = false;
	if(!validateTextNumber('nbMultiFamily'))
		validated = false;
	if(!validateTextNumber('nbCommercial'))
		validated = false;
	if(!validateTextNumber('nbOther'))
		validated = false;
	if(!validateTextFilled('nbDescription'))
		validated = false;
	if(!validateTextFilled('nbMConditions'))
		validated = false;
		
	return validated;
}

function validateTabFour()//1004-Site
{
	var validated = true;
	
	if(!validateTextFilled('dimensions'))
		validated = false;
	if(!validateTextFilled('area'))
		validated = false;
	if(!validateTextFilled('shape'))
		validated = false;
	if(!validateTextFilled('view'))
		validated = false;
	if(!validateTextFilled('specific-zoning-classification'))
		validated = false;
	if(!validateTextFilled('zoning-description'))
		validated = false;
	if(!validateDropdown('zoning-compliance'))
		validated = false;
	//Option to validateZoningComlianceIllegal
	if(!validateDropdown('property-improved'))
		validated = false;
	//Option to validatePropertyImprovedNo
	if(!validateDropdown('electricity'))
		validated = false;
	if(!validateDropdown('gas'))
		validated = false;
	if(!validateDropdown('water'))
		validated = false;
	if(!validateDropdown('sanitary-sewer'))
		validated = false;
	if(!validateDropdown('street'))
		validated = false;
	if(!validateDropdown('alley'))
		validated = false;
	if(!validateDropdown('flood-hazard'))
		validated = false;
	if(!validateTextFilled('flood-zone'))
		validated = false;
	if(!validateTextFilled('map'))
		validated = false;
	if(!validateTextFilled('map-date'))
		validated = false;
	if(!validateDropdown('typical-for-market-area'))
		validated = false;
	//validateTypicalForMarketAreaNo
	if(!validateDropdown('adverse-site-factors'))
		validated = false;
	//validateAdverseSiteFactorsYes
		
	return validated;
}

function validateTabFive()//1004-Improvements
{
	validated = true;
	
	if(!validateDropdown('units'))
		validated = false;
	if(!validateTextNumber('num-stories'))
		validated = false;
	if(!validateDropdown('type'))
		validated = false;
	if(!validateTextFilled('design-style'))
		validated = false;
	if(!validateTextNumber('year-built'))
		validated = false;
	if(!validateTextNumber('effective-age'))
		validated = false;
	if(!validateRadio('ks-checkbox','foundation-radio-group'))
		validated = false;
	if(!validateTextNumber('basement-area'))
		validated = false;
	if(!validateTextNumber('basement-finish'))
		validated = false;
	if(!validateRadio('ks-checkbox2','sump-pump-radio-group'))
		validated = false;
	if(!validateDropdown('evidence-of'))
		validated = false;
	if(!validateTextFilled('foundation-walls'))
		validated = false;
	if(!validateTextFilled('exterior-walls'))
		validated = false;
	if(!validateTextFilled('roof-surface'))
		validated = false;
	if(!validateTextFilled('gutters-and-downspouts'))
		validated = false;
	if(!validateTextFilled('window-type'))
		validated = false;
	if(!validateTextFilled('storm-sash-insulated'))
		validated = false;
	if(!validateTextFilled('screens'))
		validated = false;
	if(!validateTextFilled('floors'))
		validated = false;
	if(!validateTextFilled('walls'))
		validated = false;
	if(!validateTextFilled('trim-finish'))
		validated = false;
	if(!validateTextFilled('bath-floor'))
		validated = false;
	if(!validateTextFilled('bath-wainscot'))
		validated = false;
	if(!validateDropdown('attic'))
		validated = false;
	if(!validateDropdown('heating'))
		validated = false;
	if(!validateTextFilled('fuel'))
		validated = false;
	if(!validateDropdown('cooling'))
		validated = false;
	if(!validateDropdown('amenities'))
		validated = false;
	if(!validateDropdown('car-storage'))
		validated = false;
	if(!validateTextNumber('num-of-cars'))
		validated = false;
	if(!validateDropdown('driveway-surface'))
		validated = false;
	/*if(!validateRadio('appliances'))
		validated = false;*/
	//appliances-other validation
	if(!validateTextFilled('rooms'))
		validated = false;
	if(!validateTextFilled('bedrooms'))
		validated = false;
	if(!validateTextFilled('baths'))
		validated = false;
	if(!validateTextFilled('square-feet-gross-living-area'))
		validated = false;
	if(!validateTextFilled('additional-features'))
		validated = false;
	if(!validateTextFilled('property-condition'))
		validated = false;
	if(!validateDropdown('physical-deficiencies'))
		validated = false;
	if(!validateTextFilled('physical-deficiencies-yes'))
		validated = false;
	if(!validateDropdown('conform-to-neighborhood'))
		validated = false;
	if(!validateTextFilled('conform-to-neighborhood-no'))
		validated = false;
	
	return validated;
}

function validateTabSix()//1004-Sales Comparison Approach
{
	var validated = true;
	
	//Subject Validations
	if(!validateTextNumber('comparable-count'))
		validated = false;
	if(!validateTextNumber('comparable-from-price'))
		validated = false;
	if(!validateTextNumber('comparable-to-price'))
		validated = false;
	if(!validateTextNumber('comparable-sale-count'))
		validated = false;
	if(!validateTextNumber('comparable-sale-from-price'))
		validated = false;
	if(!validateTextNumber('comparable-sale-to-price'))
		validated = false;
	if(!validateTextFilled('subject-address'))
		validated = false;
	if(!validateTextNumber('subject-sale-price'))
		validated = false;
	if(!validateTextNumber('subject-sale-gross-price'))
		validated = false;
	if(!validateTextFilled('subject-location'))
		validated = false;
	if(!validateTextFilled('subject-leasehold'))
		validated = false;
	if(!validateTextFilled('subject-site'))
		validated = false;
	if(!validateTextFilled('subject-view'))
		validated = false;
	if(!validateTextFilled('subject-design-style'))
		validated = false;
	if(!validateTextFilled('subject-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('subject-actual-age'))
		validated = false;
	if(!validateTextFilled('subject-condition'))
		validated = false;
	if(!validateTextNumber('subject-total-rooms'))
		validated = false;
	if(!validateTextNumber('subject-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('subject-total-baths'))
		validated = false;
	if(!validateTextNumber('subject-gross-living-area'))
		validated = false;
	if(!validateTextFilled('subject-rooms-below-grade'))
		validated = false;
	if(!validateTextFilled('subject-functional-utility'))
		validated = false;
	if(!validateTextFilled('subject-heating-cooling'))
		validated = false;
	if(!validateTextFilled('subject-energy-efficient-items'))
		validated = false;
	if(!validateTextFilled('subject-garage-carport'))
		validated = false;
	if(!validateTextFilled('subject-porch-patio-deck'))
		validated = false;
	//Comparable Sale #1 Validations
	if(!validateTextFilled('comparable-one-address'))
		validated = false;
	if(!validateTextFilled('comparable-one-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-one-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-one-sale-gross-price'))
		validated = false;
	if(!validateTextFilled('comparable-one-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-one-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-one-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-one-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-one-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-location'))
		validated = false;
	if(!validateTextNumber('comparable-one-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-one-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-site'))
		validated = false;
	if(!validateTextNumber('comparable-one-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-view'))
		validated = false;
	if(!validateTextNumber('comparable-one-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-one-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-one-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-one-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-condition'))
		validated = false;
	if(!validateTextNumber('comparable-one-condition-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-one-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-one-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-one-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-one-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-one-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-one-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-garage-carport'))
		validated = false;
	if(!validateTextNumber('comparable-one-garage-carport-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-one-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-one-net-adjustment-checkbox', 'comparable-one-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-one-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-dollar-adjustment'))
		validated = false;
	//Comparable Sale #2 Validations
	if(!validateTextFilled('comparable-two-address'))
		validated = false;
	if(!validateTextFilled('comparable-two-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-two-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-two-sale-gross-price'))
		validated = false;
	if(!validateTextFilled('comparable-two-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-two-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-two-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-two-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-two-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-location'))
		validated = false;
	if(!validateTextNumber('comparable-two-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-two-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-site'))
		validated = false;
	if(!validateTextNumber('comparable-two-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-view'))
		validated = false;
	if(!validateTextNumber('comparable-two-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-two-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-two-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-two-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-condition'))
		validated = false;
	if(!validateTextNumber('comparable-two-condition-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-two-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-two-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-two-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-two-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-two-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-two-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-garage-carport'))
		validated = false;
	if(!validateTextNumber('comparable-two-garage-carport-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-two-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-two-net-adjustment-checkbox', 'comparable-two-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-two-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-dollar-adjustment'))
		validated = false;
	//Comparable Sale #3 Validations
	if(!validateTextFilled('comparable-three-address'))
		validated = false;
	if(!validateTextFilled('comparable-three-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-three-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-three-sale-gross-price'))
		validated = false;
	if(!validateTextFilled('comparable-three-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-three-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-three-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-three-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-three-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-location'))
		validated = false;
	if(!validateTextNumber('comparable-three-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-three-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-site'))
		validated = false;
	if(!validateTextNumber('comparable-three-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-view'))
		validated = false;
	if(!validateTextNumber('comparable-three-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-three-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-three-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-three-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-condition'))
		validated = false;
	if(!validateTextNumber('comparable-three-condition-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-three-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-three-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-three-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-three-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-three-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-three-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-garage-carport'))
		validated = false;
	if(!validateTextNumber('comparable-three-garage-carport-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-three-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-three-net-adjustment-checkbox', 'comparable-three-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-three-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-dollar-adjustment'))
		validated = false;
	//Research and Data Sources Validations
	if(!validateRadio('research-data-history-radio', 'research-data-history-radio-group'))
		validated = false;
	//validate research-data-history-not-explain
	if(!validateRadio('my-research-radio', 'my-research-radio-group'))
		validated = false;
	if(!validateTextFilled('my-research-data-sources'))
		validated = false;
	if(!validateRadio('my-research-comparable-radio', 'my-research-comparable-comparable-radio-group'))
		validated = false;
	if(!validateTextFilled('my-research-comparable-data-sources'))
		validated = false;
	if(!validateDate('subject-date-of-prior-sale'))
		validated = false;
	if(!validateDate('comparable-one-date-of-prior-sale'))
		validated = false;
	if(!validateDate('comparable-two-date-of-prior-sale'))
		validated = false;
	if(!validateDate('comparable-three-date-of-prior-sale'))
		validated = false;
	if(!validateTextNumber('subject-price-of-prior-sale'))
		validated = false;
	if(!validateTextNumber('comparable-one-price-of-prior-sale'))
		validated = false;
	if(!validateTextNumber('comparable-two-price-of-prior-sale'))
		validated = false;
	if(!validateTextNumber('comparable-three-price-of-prior-sale'))
		validated = false;
	if(!validateTextFilled('subject-data-sources-of-prior-sale'))
		validated = false;
	if(!validateTextFilled('comparable-one-data-sources-of-prior-sale'))
		validated = false;
	if(!validateTextFilled('comparable-two-data-sources-of-prior-sale'))
		validated = false;
	if(!validateTextFilled('comparable-three-data-sources-of-prior-sale'))
		validated = false;
	if(!validateDate('subject-effective-date-of-data-sources'))
		validated = false;
	if(!validateDate('comparable-one-effective-date-of-data-sources'))
		validated = false;
	if(!validateDate('comparable-two-effective-date-of-data-sources'))
		validated = false;
	if(!validateDate('comparable-three-effective-date-of-data-sources'))
		validated = false;
	if(!validateTextFilled('subject-comparable-analysis'))
		validated = false;
	if(!validateTextFilled('subject-comparable-summary-or-sales-comparison-approach'))
		validated = false;
	
	return validated;
}

function validateTabSeven()//1004-Reconcilliation
{
	var validated = false;
	
	if(!validateTextNumber('sales-comparison-approach'))
		validated = false;
	if(!validateTextNumber('cost-approach'))
		validated = false;
	if(!validateTextNumber('income-approach'))
		validated = false;
	if(!validateRadio('appraisal-radio-status'))
		validated = false;
	if(!validateTextNumber('market-value'))
		validated = false;
	if(!validateDate('appraisal-date'))
		validated = false;
	if(!validateDate('date-of-inspection'))
		validated = false;
	if(!validateDate('effective-date'))
		validated = false;
	
	return validated;
}

//validate tab eight -- notes

function validateTabNine()//1004-Cost Approach
{
  var validated = true;
  
  if(!validateRadio('estimated-radio','estimated-radio-group'))
    validated = false;
  if(!validateTextFilled('source-of-data-cost'))
    validated = false;
  if(!validateTextFilled('quality-rating-from-cost-service'))
    validated = false;
  if(!validateDate('effective-date-of-cost-data'))
    validated = false;
  if(!validateTextFilled('cost-approach-comments'))
    validated = false;
  if(!validateTextNumber('estimated-remaining-economic-life'))
    validated = false;
  if(!validateTextNumber('opinion-of-site-value'))
    validated = false;
  if(!validateTextNumber('dwelling-one-square-feet'))
    validated = false;
  if(!validateTextNumber('dwelling-one-sqare-foot-cost'))
    validated = false;
  if(!validateTextNumber('dwelling-one-total-cost'))
    validated = false;
  if(!validateTextNumber('dwelling-two-square-feet'))
    validated = false;
  if(!validateTextNumber('dwelling-two-sqare-foot-cost'))
    validated = false;
  if(!validateTextNumber('dwelling-two-total-cost'))
    validated = false;
  if(!validateTextNumber('garage-carport-square-feet'))
    validated = false;
  if(!validateTextNumber('garage-carport-sqare-foot-cost'))
    validated = false;
  if(!validateTextNumber('garage-carport-total-cost'))
    validated = false;
  if(!validateTextNumber('total-estimate-of-cost-new'))
    validated = false;
  if(!validateTextNumber('depreciation-physical'))
    validated = false;
  if(!validateTextNumber('depreciation-functional'))
    validated = false;
  if(!validateTextNumber('depreciation-external'))
    validated = false;
  if(!validateTextNumber('depreciation-total'))
    validated = false;
  if(!validateTextNumber('depreciation-cost-of-improvements'))
    validated = false;
  if(!validateTextNumber('as-is-value-of-site-improvements'))
    validated = false;
  if(!validateTextNumber('indicated-value-by-cost-approach'))
    validated = false;
  
  return validated;
}

function validateTabTen()//1004-Income
{
	var validated = true;
	
	if(!validateTextNumber('estimated-monthly-market-rent'))
		validated = false;
	if(!validateTextNumber('gross-rent-multiplier'))
		validated = false;
	if(!validateTextNumber('indicated-value-by-income-approach'))
		validated = false;
	if(!validateTextFilled('summary-of-income-approach'))
		validated = false;
	
	return validated;
}

function validateTabEleven()//1004-PUD Information
{
	var validated = true;
	
	if(!validateDropdown('homeowners-association'))
		validated = false;
	if(!validateDropdown('unit-types'))
		validated = false;
	if(!validateTextFilled('legal-name-of-project'))
		validated = false;
	if(!validateTextFilled('total-number-of-phases'))
		validated = false;
	if(!validateTextNumber('total-number-of-units'))
		validated = false;
	if(!validateTextNumber('total-number-of-units-sold'))
		validated = false;
	if(!validateTextNumber('total-number-of-units-rented'))
		validated = false;
	if(!validateTextNumber('total-number-of-units-for-sale'))
		validated = false;
	if(!validateTextFilled('data-sources-pud'))
		validated = false;
	if(!validateDropdown('project-created-by-conversion'))
		validated = false;
	//if(!validateDate('project-created-by-conversion-yes'))
		//validated = false;
	if(!validateTextFilled('data-sources-conversion'))
		validated = false;
	if(!validateDropdown('multi-dwelling'))
		validated = false;
	if(!validateTextFilled('data-sources-multi-dwelling'))
		validated = false;
	if(!validateDropdown('facilities-complete'))
		validated = false;
	//if(!validateTextFilled('facilities-complete-no'))
		//validated = false;
	if(!validateDropdown('leased-to-homeowners-association'))
		validated = false;
	//if(!validateTextFilled('leased-to-homeowners-association-yes'))
		//validated = false;
	if(!validateTextFilled('describe-common-elements'))
		validated = false;
	
	return validated;
}

function validateTabTwelve()//1004-Appraiser
{
	var validated = true;

	//Appraiser Validations
	if(!validateTextFilled('signature'))
		validated = false;
	if(!validateTextFilled('appraiser-name'))
		validated = false;
	if(!validateTextFilled('company-name'))
		validated = false;
	if(!validateTextFilled('company-address'))
		validated = false;
	if(!validatePhoneNumber('telephone-number'))
		validated = false;
	if(!validateEmail('email-address'))
		validated = false;
	if(!validateDate('date-of-signature-and-report'))
		validated = false;
	if(!validateDate('effective-date-of-appraisal'))
		validated = false;
	if(!validateTextNumber('state-certification-num'))
		validated = false;
	if(!validateTextNumber('state-license-num'))
		validated = false;
	if(!validateTextFilled('other-license'))
		validated = false;
	if(!validateTextNumber('state-num'))
		validated = false;
	if(!validateTextFilled('state-appraiser'))
		validated = false;
	if(!validateDate('expiration-date-of-certification'))
		validated = false;
	if(!validateTextNumber('appraised-value'))
		validated = false;
	if(!validateTextFilled('address-of-property-appraised'))
		validated = false;
	if(!validateTextFilled('lender-client-name'))
		validated = false;
	if(!validateTextFilled('lender-client-company-name'))
		validated = false;
	if(!validateEmail('lender-client-email-address'))
		validated = false;
	if(!validateTextFilled('lender-client-company-address'))
		validated = false;
	//Supervisory Appraiser Validations
	if(!validateTextFilled('supervisory-signature'))
		validated = false;
	if(!validateTextFilled('supervisory-appraiser-name'))
		validated = false;
	if(!validateTextFilled('supervisory-company-name'))
		validated = false;
	if(!validateTextFilled('supervisory-company-address'))
		validated = false;
	if(!validatePhoneNumber('supervisory-telephone-number'))
		validated = false;
	if(!validateEmail('supervisory-email-address'))
		validated = false;
	if(!validateDate('supervisory-date-of-signature'))
		validated = false;
	if(!validateTextNumber('supervisory-state-certification-num'))
		validated = false;
	if(!validateTextNumber('supervisory-state-license-num'))
		validated = false;
	if(!validateTextFilled('supervisory-state-appraiser'))
		validated = false;
	if(!validateDate('supervisory-expiration-date-of-certification'))
		validated = false;
	if(!validateRadio('subject-property-supervisory-group', 'subject-property-radio-group'))
		validated = false;
	//validate subject-property-date-of-inspection
	if(!validateRadio('comparable-sales-radio-group', 'comparable-sales-radio-group'))
		validated = false;
	//validate comparable-sales-date-of-inspection
	
	return validated;
}

function validateAllTabs()
{
	var validated = true;
	
	if(!validateTabOne())
		validated = false;
	if(!validateTabTwo())
		validated = false;
	if(!validateTabThree())
		validated = false;
	if(!validateTabFour())
		validated = false;
	if(!validateTabFive())
		validated = false;
	if(!validateTabSix())
		validated = false;
    if(!validateTabSeven())
		validated = false;
	//Tab eight is notes page -- No validation
	if(!validateTabNine())
		validated = false;
    if(!validateTabTen())
		validated = false;
    if(!validateTabEleven())
		validated = false;
	if(!validateTabTwelve())
		validated = false;
		
	//error message
	if(validated)
		$('#error-message').css("visibility","hidden");	
	else
		$('#error-message').css("visibility","visible");
		
	return validated;
}
////////////////////////////////////////////////

//2055 Validations
//TabOne = 1004 TabOne
//TabTwo = 1004 TabTwo
//TabThree = 1004 TabThree
//TabFour = 1004 TabFour
function validate2055TabFive()//2055-Improvements
{
	validated = true;
	
  //validateCheckboxes physical-characteristics-sources-check,physical-characteristics-sources-check-group
  //validate physical-characteristics-sources-check-other
  if(!validateTextFilled('data-sources-for-gross-living-area'))
		validated = false;
	if(!validateDropdown('units'))
		validated = false;
	if(!validateTextNumber('num-stories'))
		validated = false;
	if(!validateDropdown('type'))
		validated = false;
	if(!validateTextFilled('design-style'))
		validated = false;
	if(!validateTextNumber('year-built'))
		validated = false;
	if(!validateTextNumber('effective-age'))
		validated = false;
	if(!validateRadio('ks-checkbox','foundation-radio-group'))
		validated = false;
	if(!validateTextNumber('basement-finish'))
		validated = false;
	if(!validateTextFilled('exterior-walls'))
		validated = false;
	if(!validateTextFilled('roof-surface'))
		validated = false;
	if(!validateTextFilled('gutters-and-downspouts'))
		validated = false;
	if(!validateTextFilled('window-type'))
		validated = false;
	if(!validateDropdown('heating'))
		validated = false;
	if(!validateTextFilled('fuel'))
		validated = false;
	if(!validateDropdown('cooling'))
		validated = false;
	if(!validateDropdown('amenities'))
		validated = false;
	if(!validateDropdown('car-storage'))
		validated = false;
	if(!validateTextNumber('num-of-cars'))
		validated = false;
	if(!validateDropdown('driveway-surface'))
		validated = false;
	/*if(!validateRadio('appliances'))
		validated = false;*/
	//appliances-other validation
	if(!validateTextFilled('rooms'))
		validated = false;
	if(!validateTextFilled('bedrooms'))
		validated = false;
	if(!validateTextFilled('baths'))
		validated = false;
	if(!validateTextFilled('square-feet-gross-living-area'))
		validated = false;
	if(!validateTextFilled('additional-features'))
		validated = false;
	if(!validateTextFilled('property-condition'))
		validated = false;
	if(!validateDropdown('physical-deficiencies'))
		validated = false;
	if(!validateTextFilled('physical-deficiencies-yes'))
		validated = false;
	if(!validateDropdown('conform-to-neighborhood'))
		validated = false;
	if(!validateTextFilled('conform-to-neighborhood-no'))
		validated = false;
	
	return validated;
}
//TabFive = 1004 TabFive
//TabSix = 1004 TabSix
//TabSeven = 1004 TabSeven
//TabEight = 1004 TabEight
//TabNine = 1004 TabNine
//TabTen = 1004 TabTen
//TabEleven = 1004 TabEleven
//TabTwelve = 1004 TabTwelve
function validate2055AllTabs()
{
	var validated = true;
	
	if(!validateTabOne())
		validated = false;
	if(!validateTabTwo())
		validated = false;
	if(!validateTabThree())
		validated = false;
	if(!validateTabFour())
		validated = false;
	if(!validate2055TabFive())
		validated = false;
	if(!validateTabSix())
		validated = false;
    if(!validateTabSeven())
		validated = false;
	//Tab eight is notes page -- No validation
	if(!validateTabNine())
		validated = false;
    if(!validateTabTen())
		validated = false;
    if(!validateTabEleven())
		validated = false;
	if(!validateTabTwelve())
		validated = false;
		
	//error message
	if(validated)
		$('#error-message').css("visibility","hidden");	
	else
		$('#error-message').css("visibility","visible");
		
	return validated;
}
///////////////////////////////////////////

//1025 Validations
//TabOne = 1004 TabOne
//TabTwo = 1004 TabTwo
//TabThree = 1004 TabThree
//TabFour = 1004 TabFour
function validate1025TabFive()//1025-Improvements
{
	validated = true;
	
	if(!validateDropdown('units'))
		validated = false;
	if(!validateTextNumber('num-stories'))
		validated = false;
  if(!validateTextNumber('num-buildings'))
		validated = false;
	if(!validateDropdown('type'))
		validated = false;
	if(!validateTextFilled('design-style'))
		validated = false;
	if(!validateTextNumber('year-built'))
		validated = false;
	if(!validateTextNumber('effective-age'))
		validated = false;
	if(!validateRadio('ks-checkbox','foundation-radio-group'))
		validated = false;
	if(!validateTextNumber('basement-area'))
		validated = false;
	if(!validateTextNumber('basement-finish'))
		validated = false;
	if(!validateRadio('ks-checkbox2','sump-pump-radio-group'))
		validated = false;
	if(!validateDropdown('evidence-of'))
		validated = false;
	if(!validateTextFilled('foundation-walls'))
		validated = false;
	if(!validateTextFilled('exterior-walls'))
		validated = false;
	if(!validateTextFilled('roof-surface'))
		validated = false;
	if(!validateTextFilled('gutters-and-downspouts'))
		validated = false;
	if(!validateTextFilled('window-type'))
		validated = false;
	if(!validateTextFilled('storm-sash-insulated'))
		validated = false;
	if(!validateTextFilled('screens'))
		validated = false;
	if(!validateTextFilled('floors'))
		validated = false;
	if(!validateTextFilled('walls'))
		validated = false;
	if(!validateTextFilled('trim-finish'))
		validated = false;
	if(!validateTextFilled('bath-floor'))
		validated = false;
	if(!validateTextFilled('bath-wainscot'))
		validated = false;
	if(!validateDropdown('attic'))
		validated = false;
	if(!validateDropdown('heating'))
		validated = false;
	if(!validateTextFilled('fuel'))
		validated = false;
	if(!validateDropdown('cooling'))
		validated = false;
	if(!validateDropdown('amenities'))
		validated = false;
	if(!validateDropdown('car-storage'))
		validated = false;
	if(!validateTextNumber('num-of-cars'))
		validated = false;
	if(!validateDropdown('driveway-surface'))
		validated = false;
	if(!validateTextNumber('num-of-appliances-refrigerator'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-range-oven'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-dishwasher'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-disposal'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-microwave'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-washer-dryer'))
    validated = false;
  if(!validateTextNumber('num-of-appliances-other'))
    validated = false;
	//appliances-other validation
	if(!validateTextFilled('unit-one-rooms'))
		validated = false;
  if(!validateTextFilled('unit-one-bedrooms'))
		validated = false;
  if(!validateTextFilled('unit-one-baths'))
		validated = false;
  if(!validateTextNumber('unit-one-square-feet-gross-living-area'))
		validated = false;
  if(!validateTextFilled('unit-two-rooms'))
		validated = false;
  if(!validateTextFilled('unit-two-bedrooms'))
		validated = false;
  if(!validateTextFilled('unit-two-baths'))
		validated = false;
  if(!validateTextNumber('unit-two-square-feet-gross-living-area'))
		validated = false;
  if(!validateTextFilled('unit-three-rooms'))
		validated = false;
  if(!validateTextFilled('unit-three-bedrooms'))
		validated = false;
  if(!validateTextFilled('unit-three-baths'))
		validated = false;
  if(!validateTextNumber('unit-three-square-feet-gross-living-area'))
		validated = false;
  if(!validateTextFilled('unit-four-rooms'))
		validated = false;
  if(!validateTextFilled('unit-four-bedrooms'))
		validated = false;
  if(!validateTextFilled('unit-four-baths'))
		validated = false;
  if(!validateTextNumber('unit-four-square-feet-gross-living-area'))
		validated = false;
	if(!validateTextFilled('additional-features'))
		validated = false;
	if(!validateTextFilled('property-condition'))
		validated = false;
	if(!validateDropdown('physical-deficiencies'))
		validated = false;
	if(!validateTextFilled('physical-deficiencies-yes'))
		validated = false;
	if(!validateDropdown('conform-to-neighborhood'))
		validated = false;
	if(!validateTextFilled('conform-to-neighborhood-no'))
		validated = false;
  if(!validateRadio('subject-to-rent-control','subject-to-rent-control-radio-group'))
		validated = false;
  //Validate subject-to-rent-control-yes
	
	return validated;
}
function validate1025TabSix()//1025-Comparable Rent Data
{
  var validated = false;
  
  //Subject
  if(!validateTextFilled('rental-subject-address'))
    validated = false;
  if(!validateTextNumber('rental-subject-current-monthly-rent'))
    validated = false;
  if(!validateTextNumber('rental-subject-rent-gross-living-area'))
    validated = false;
  if(!validateRadio('rent-control-subject-radio','rent-control-subject-radio-group'))
    validated = false;
  if(!validateTextFilled('rental-subject-data-sources'))
    validated = false;
  if(!validateDate('rental-subject-date-of-leases'))
    validated = false;
  if(!validateTextFilled('rental-subject-location'))
    validated = false;
  if(!validateTextNumber('rental-subject-actual-age'))
    validated = false;
  if(!validateTextFilled('rental-subject-condition'))
    validated = false;
  if(!validateTextNumber('rental-subject-gross-building-area'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-one-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-one-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-one-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-one-size'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-two-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-two-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-two-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-two-size'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-three-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-three-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-three-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-three-size'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-four-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-four-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-four-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-subject-unit-four-size'))
    validated = false;
  if(!validateTextFilled('rental-subject-utilities-included'))
    validated = false;
  //Comparable Rental #1
  if(!validateTextFilled('rental-comparable-one-address'))
    validated = false;
  if(!validateTextFilled('rental-comparable-one-proximity'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-current-monthly-rent'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-rent-gross-living-area'))
    validated = false;
  if(!validateRadio('rent-control-comparable-one-radio','rent-control-comparable-one-radio-group'))
    validated = false;
  if(!validateTextFilled('rental-comparable-one-data-sources'))
    validated = false;
  if(!validateDate('rental-comparable-one-date-of-leases'))
    validated = false;
  if(!validateTextFilled('rental-comparable-one-location'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-actual-age'))
    validated = false;
  if(!validateTextFilled('rental-comparable-one-condition'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-gross-building-area'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-one-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-one-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-one-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-one-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-two-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-two-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-two-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-two-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-three-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-three-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-three-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-three-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-four-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-four-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-four-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-one-unit-four-size'))
    validated = false;
  if(!validateTextFilled('rental-comparable-one-utilities-included'))
    validated = false;
  //Comparable Rental #2
  if(!validateTextFilled('rental-comparable-two-address'))
    validated = false;
  if(!validateTextFilled('rental-comparable-two-proximity'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-current-monthly-rent'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-rent-gross-living-area'))
    validated = false;
  if(!validateRadio('rent-control-comparable-two-radio','rent-control-comparable-two-radio-group'))
    validated = false;
  if(!validateTextFilled('rental-comparable-two-data-sources'))
    validated = false;
  if(!validateDate('rental-comparable-two-date-of-leases'))
    validated = false;
  if(!validateTextFilled('rental-comparable-two-location'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-actual-age'))
    validated = false;
  if(!validateTextFilled('rental-comparable-two-condition'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-gross-building-area'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-one-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-one-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-one-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-one-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-two-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-two-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-two-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-two-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-three-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-three-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-three-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-three-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-four-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-four-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-four-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-two-unit-four-size'))
    validated = false;
  if(!validateTextFilled('rental-comparable-two-utilities-included'))
    validated = false;
  //Comparable Rental #3
  if(!validateTextFilled('rental-comparable-three-address'))
    validated = false;
  if(!validateTextFilled('rental-comparable-three-proximity'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-current-monthly-rent'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-rent-gross-living-area'))
    validated = false;
  if(!validateRadio('rent-control-comparable-three-radio','rent-control-comparable-three-radio-group'))
    validated = false;
  if(!validateTextFilled('rental-comparable-three-data-sources'))
    validated = false;
  if(!validateDate('rental-comparable-three-date-of-leases'))
    validated = false;
  if(!validateTextFilled('rental-comparable-three-location'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-actual-age'))
    validated = false;
  if(!validateTextFilled('rental-comparable-three-condition'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-gross-building-area'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-one-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-one-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-one-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-one-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-two-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-two-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-two-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-two-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-three-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-three-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-three-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-three-size'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-four-total-rooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-four-total-bedrooms'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-four-total-baths'))
    validated = false;
  if(!validateTextNumber('rental-comparable-three-unit-four-size'))
    validated = false;
  if(!validateTextFilled('rental-comparable-three-utilities-included'))
    validated = false;
  //Rental Data and Analysis
  if(!validateTextFilled('rental-analysis-data'))
    validated = false;
  
  return validated;
}

function validate1025TabSeven()//1025-Subject Rent Schedule
{
  var validated = false;
  
  //Leases
  if(!validateDate('unit-one-lease-begin-date'))
    validated = false;
  if(!validateDate('unit-one-lease-end-date'))
    validated = false;
  if(!validateDate('unit-two-lease-begin-date'))
    validated = false;
  if(!validateDate('unit-two-lease-end-date'))
    validated = false;
  if(!validateDate('unit-three-lease-begin-date'))
    validated = false;
  if(!validateDate('unit-three-lease-end-date'))
    validated = false;
  if(!validateDate('unit-four-lease-begin-date'))
    validated = false;
  if(!validateDate('unit-four-lease-end-date'))
    validated = false;
  if(!validateTextFilled('comments-on-lease-date'))
    validated = false;
  //Actual Rent
  if(!validateTextNumber('unit-one-unfurnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-one-furnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-one-total-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-unfurnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-furnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-total-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-unfurnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-furnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-total-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-unfurnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-furnished-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-total-rent'))
    validated = false;
  if(!validateTextNumber('subject-total-actual-monthly-rent'))
    validated = false;
  if(!validateTextNumber('subject-other-monthly-income'))
    validated = false;
  if(!validateTextNumber('subject-total-actual-monthly-income'))
    validated = false;
  //Opinion of Market Value
  if(!validateTextNumber('unit-one-unfurnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-one-furnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-one-total-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-unfurnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-furnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-two-total-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-unfurnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-furnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-three-total-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-unfurnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-furnished-market-rent'))
    validated = false;
  if(!validateTextNumber('unit-four-total-market-rent'))
    validated = false;
  if(!validateTextNumber('subject-total-gross-monthly-rent-opinion'))
    validated = false;
  if(!validateTextNumber('subject-other-monthly-income-opinion'))
    validated = false;
  if(!validateTextNumber('subject-total-estimated-monthly-income-opinion'))
    validated = false;
  //Other
  if(!validateRadio('subject-utilities-check','subject-utilities-checkbox-group'))
    validated = false;
  //validate subject-utilities-check-other
  if(!validateTextFilled('comments-on-estimated-rent'))
    validated = false;
  
  return validated
}
function validate1025TabEight()//1025-Prior Sale History
{
  var validated = false;
  
  if(!validateRadio('research-sale-history-radio','research-sale-history-radio-group'))
    validated = false;
  //validate research-sale-history-not-explain
  if(!validateRadio('research-sale-history-three-years-radio','research-sale-history-three-years-radio-group'))
    validated = false;
  if(!validateTextFilled('research-sale-history-three-years-data-sources'))
    validated = false;
  if(!validateRadio('research-comparable-sale-history-radio','research-comparable-sale-history-radio-group'))
    validated = false;
  if(!validateTextFilled('research-comparable-sale-history-data-sources'))
    validated = false;
  if(!validateDate('subject-date-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('subject-price-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('subject-prior-sale-data-sources'))
    validated = false;
  if(!validateDate('subject-prior-sale-effective-date-of-data-sources'))
    validated = false;
  if(!validateDate('comparable-one-date-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-one-price-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-one-prior-sale-data-sources'))
    validated = false;
  if(!validateDate('comparable-one-prior-sale-effective-date-of-data-sources'))
    validated = false;
  if(!validateDate('comparable-two-date-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-two-price-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-two-prior-sale-data-sources'))
    validated = false;
  if(!validateDate('comparable-two-prior-sale-effective-date-of-data-sources'))
    validated = false;
  if(!validateDate('comparable-three-date-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-three-price-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-three-prior-sale-data-sources'))
    validated = false;
  if(!validateDate('comparable-three-prior-sale-effective-date-of-data-sources'))
    validated = false;
  if(!validateDate('comparable-four-date-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-four-price-of-prior-sale-transfer'))
    validated = false;
  if(!validateTextFilled('comparable-four-prior-sale-data-sources'))
    validated = false;
  if(!validateDate('comparable-four-prior-sale-effective-date-of-data-sources'))
    validated = false;
  if(!validateTextFilled('analysis-of-prior-sale-history-for-the-subject-property'))
    validated = false;
    
  return validated;
}
function validate1025TabNine()//1025-Sales Comparison Approach
{
  var validated = false;
  
  //Subject Validations
	if(!validateTextNumber('comparable-count'))
		validated = false;
	if(!validateTextNumber('comparable-from-price'))
		validated = false;
	if(!validateTextNumber('comparable-to-price'))
		validated = false;
	if(!validateTextNumber('comparable-sale-count'))
		validated = false;
	if(!validateTextNumber('comparable-sale-from-price'))
		validated = false;
	if(!validateTextNumber('comparable-sale-to-price'))
		validated = false;
	if(!validateTextFilled('subject-address'))
		validated = false;
	if(!validateTextNumber('subject-sale-price'))
		validated = false;
	if(!validateTextNumber('subject-sale-gross-price'))
		validated = false;
  if(!validateTextNumber('subject-sale-gross-monthly-rent'))
		validated = false;
  if(!validateTextNumber('subject-sale-gross-rent-multiplier'))
		validated = false;
	if(!validateTextNumber('subject-sale-price-per-unit'))
		validated = false;
  if(!validateTextNumber('subject-sale-price-per-room'))
		validated = false;
  if(!validateTextNumber('subject-sale-price-per-bedroom'))
		validated = false;
  if(!validateRadio('subject-sale-rent-control-radio','subject-sale-rent-control-radio-group'))
		validated = false;
  if(!validateTextFilled('subject-location'))
		validated = false;
	if(!validateTextFilled('subject-leasehold'))
		validated = false;
	if(!validateTextFilled('subject-site'))
		validated = false;
	if(!validateTextFilled('subject-view'))
		validated = false;
	if(!validateTextFilled('subject-design-style'))
		validated = false;
	if(!validateTextFilled('subject-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('subject-actual-age'))
		validated = false;
	if(!validateTextFilled('subject-condition'))
		validated = false;
  if(!validateTextNumber('subject-gross-building-area'))
		validated = false;
	if(!validateTextNumber('subject-unit-one-total-rooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-one-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-one-total-baths'))
		validated = false;
  if(!validateTextNumber('subject-unit-two-total-rooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-two-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-two-total-baths'))
		validated = false;
  if(!validateTextNumber('subject-unit-three-total-rooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-three-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-three-total-baths'))
		validated = false;
  if(!validateTextNumber('subject-unit-four-total-rooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-four-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('subject-unit-four-total-baths'))
		validated = false;
	if(!validateTextFilled('subject-basement-description'))
		validated = false;
  if(!validateTextFilled('subject-basement-finished-rooms'))
		validated = false;
	if(!validateTextFilled('subject-functional-utility'))
		validated = false;
	if(!validateTextFilled('subject-heating-cooling'))
		validated = false;
	if(!validateTextFilled('subject-energy-efficient-items'))
		validated = false;
	if(!validateTextFilled('subject-parking-on-off-site'))
		validated = false;
	if(!validateTextFilled('subject-porch-patio-deck'))
		validated = false;
	//Comparable Sale #1 Validations
	if(!validateTextFilled('comparable-one-address'))
		validated = false;
	if(!validateTextFilled('comparable-one-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-one-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-one-sale-gross-price'))
		validated = false;
  if(!validateTextNumber('comparable-one-sale-gross-monthly-rent'))
		validated = false;
  if(!validateTextNumber('comparable-one-sale-gross-rent-multiplier'))
		validated = false;
  if(!validateTextNumber('comparable-one-sale-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-one-sale-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-one-sale-price-per-bedroom'))
		validated = false;
  if(!validateRadio('comparable-one-sale-rent-control-radio','comparable-one-sale-rent-control-radio-group'))
		validated = false;
	if(!validateTextFilled('comparable-one-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-one-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-one-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-one-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-one-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-location'))
		validated = false;
	if(!validateTextNumber('comparable-one-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-one-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-site'))
		validated = false;
	if(!validateTextNumber('comparable-one-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-view'))
		validated = false;
	if(!validateTextNumber('comparable-one-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-one-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-one-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-one-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-condition'))
		validated = false;
	if(!validateTextNumber('comparable-one-condition-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-gross-building-area'))
		validated = false;
  if(!validateTextNumber('comparable-one-gross-building-area-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-one-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-one-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-one-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-one-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-two-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-two-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-two-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-two-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-three-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-three-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-three-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-three-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-four-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-four-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-four-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-one-unit-four-total-rooms-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-one-basement-description'))
		validated = false;
  if(!validateTextNumber('comparable-one-basement-description-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-one-basement-finished-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-one-basement-finsished-rooms-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-one-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-one-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-one-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-one-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-one-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-one-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-one-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-parking-on-off-site'))
		validated = false;
	if(!validateTextNumber('comparable-one-parking-on-off-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-one-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-one-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-one-net-adjustment-checkbox', 'comparable-one-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-one-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-one-dollar-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-one-adjusted-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-one-adjusted-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-one-adjusted-price-per-bedroom'))
		validated = false;
	//Comparable Sale #2 Validations
	if(!validateTextFilled('comparable-two-address'))
		validated = false;
	if(!validateTextFilled('comparable-two-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-two-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-two-sale-gross-price'))
		validated = false;
  if(!validateTextNumber('comparable-two-sale-gross-monthly-rent'))
		validated = false;
  if(!validateTextNumber('comparable-two-sale-gross-rent-multiplier'))
		validated = false;
  if(!validateTextNumber('comparable-two-sale-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-two-sale-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-two-sale-price-per-bedroom'))
		validated = false;
  if(!validateRadio('comparable-two-sale-rent-control-radio','comparable-two-sale-rent-control-radio-group'))
		validated = false;
	if(!validateTextFilled('comparable-two-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-two-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-two-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-two-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-two-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-location'))
		validated = false;
	if(!validateTextNumber('comparable-two-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-two-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-site'))
		validated = false;
	if(!validateTextNumber('comparable-two-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-view'))
		validated = false;
	if(!validateTextNumber('comparable-two-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-two-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-two-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-two-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-condition'))
		validated = false;
	if(!validateTextNumber('comparable-two-condition-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-gross-building-area'))
		validated = false;
  if(!validateTextNumber('comparable-two-gross-building-area-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-one-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-one-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-one-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-one-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-two-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-two-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-two-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-two-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-three-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-three-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-three-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-three-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-four-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-four-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-four-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-two-unit-four-total-rooms-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-two-basement-description'))
		validated = false;
  if(!validateTextNumber('comparable-two-basement-description-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-two-basement-finished-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-two-basement-finsished-rooms-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-two-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-two-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-two-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-two-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-two-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-two-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-two-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-parking-on-off-site'))
		validated = false;
	if(!validateTextNumber('comparable-two-parking-on-off-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-two-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-two-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-two-net-adjustment-checkbox', 'comparable-two-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-two-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-two-dollar-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-two-adjusted-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-two-adjusted-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-two-adjusted-price-per-bedroom'))
		validated = false;
	//Comparable Sale #3 Validations
	if(!validateTextFilled('comparable-three-address'))
		validated = false;
	if(!validateTextFilled('comparable-three-proximity'))
		validated = false;
	if(!validateTextNumber('comparable-three-sale-price'))
		validated = false;
	if(!validateTextNumber('comparable-three-sale-gross-price'))
		validated = false;
  if(!validateTextNumber('comparable-three-sale-gross-monthly-rent'))
		validated = false;
  if(!validateTextNumber('comparable-three-sale-gross-rent-multiplier'))
		validated = false;
  if(!validateTextNumber('comparable-three-sale-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-three-sale-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-three-sale-price-per-bedroom'))
		validated = false;
  if(!validateRadio('comparable-three-sale-rent-control-radio','comparable-three-sale-rent-control-radio-group'))
		validated = false;
	if(!validateTextFilled('comparable-three-data-sources'))
		validated = false;
	if(!validateTextFilled('comparable-three-verification-sources'))
		validated = false;
	if(!validateTextFilled('comparable-three-concessions'))
		validated = false;
	if(!validateTextNumber('comparable-three-concessions-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-date-of-sale'))
		validated = false;
	if(!validateTextNumber('comparable-three-date-of-sale-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-location'))
		validated = false;
	if(!validateTextNumber('comparable-three-location-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-leasehold'))
		validated = false;
	if(!validateTextNumber('comparable-three-leasehold-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-site'))
		validated = false;
	if(!validateTextNumber('comparable-three-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-view'))
		validated = false;
	if(!validateTextNumber('comparable-three-view-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-design-style'))
		validated = false;
	if(!validateTextNumber('comparable-three-design-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-quality-of-construction'))
		validated = false;
	if(!validateTextNumber('comparable-three-quality-of-construction-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-actual-age'))
		validated = false;
	if(!validateTextNumber('comparable-three-actual-age-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-condition'))
		validated = false;
	if(!validateTextNumber('comparable-three-condition-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-gross-building-area'))
		validated = false;
  if(!validateTextNumber('comparable-three-gross-building-area-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-one-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-one-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-one-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-one-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-two-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-two-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-two-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-two-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-three-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-three-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-three-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-three-total-rooms-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-four-total-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-four-total-bedrooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-four-total-baths'))
		validated = false;
  if(!validateTextNumber('comparable-three-unit-four-total-rooms-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-three-basement-description'))
		validated = false;
  if(!validateTextNumber('comparable-three-basement-description-adjustment'))
		validated = false;
  if(!validateTextFilled('comparable-three-basement-finished-rooms'))
		validated = false;
  if(!validateTextNumber('comparable-three-basement-finsished-rooms-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-rooms'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-bedrooms'))
		validated = false;
	if(!validateTextNumber('comparable-three-total-baths'))
		validated = false;
	if(!validateTextNumber('comparable-three-gross-living-area'))
		validated = false;
	if(!validateTextNumber('comparable-three-above-grade-rooms-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-rooms-below-grade'))
		validated = false;
	if(!validateTextNumber('comparable-three-rooms-below-grade-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-functional-utility'))
		validated = false;
	if(!validateTextNumber('comparable-three-functional-utility-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-heating-cooling'))
		validated = false;
	if(!validateTextNumber('comparable-three-heating-cooling-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-energy-efficient-items'))
		validated = false;
	if(!validateTextNumber('comparable-three-energy-efficient-items-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-parking-on-off-site'))
		validated = false;
	if(!validateTextNumber('comparable-three-parking-on-off-site-adjustment'))
		validated = false;
	if(!validateTextFilled('comparable-three-porch-patio-deck'))
		validated = false;
	if(!validateTextNumber('comparable-three-porch-patio-deck-adjustment'))
		validated = false;
	if(!validateRadio('comparable-three-net-adjustment-checkbox', 'comparable-three-net-adjustment-radio-group'))
		validated = false;
	if(!validateTextNumber('comparable-three-amount-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-net-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-gross-adjustment'))
		validated = false;
	if(!validateTextNumber('comparable-three-dollar-adjustment'))
		validated = false;
  if(!validateTextNumber('comparable-three-adjusted-price-per-unit'))
		validated = false;
  if(!validateTextNumber('comparable-three-adjusted-price-per-room'))
		validated = false;
  if(!validateTextNumber('comparable-three-adjusted-price-per-bedroom'))
		validated = false;
	//Summary Validations
	if(!validateTextNumber('value-per-unit-cost-per-unit'))
		validated = false;
  if(!validateTextNumber('value-per-unit-units'))
		validated = false;
  if(!validateTextNumber('value-per-unit-total'))
		validated = false;
  if(!validateTextNumber('value-per-room-cost-per-room'))
		validated = false;
  if(!validateTextNumber('value-per-room-rooms'))
		validated = false;
  if(!validateTextNumber('value-per-room-total'))
		validated = false;
  if(!validateTextNumber('value-per-gba-cost-per-gba'))
		validated = false;
  if(!validateTextNumber('value-per-gba-gba'))
		validated = false;
  if(!validateTextNumber('value-per-gba-total'))
		validated = false;
  if(!validateTextNumber('value-per-bedroom-cost-per-bedroom'))
		validated = false;
  if(!validateTextNumber('value-per-bedroom-bedroom'))
		validated = false;
  if(!validateTextNumber('value-per-bedroom-total'))
		validated = false;
  if(!validateTextFilled('summary-including-reconciliation'))
		validated = false;
  if(!validateTextNumber('indicated-value-by-sales-comparison-approach'))
		validated = false;
  
  return validated;
}

//////////////////////////////////////////////////