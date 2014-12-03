//Mapping Way
var data = {
	subjectPropertyAddress: '123 Address',//Normal TextArea or input type="text" or date example -- subjectPropertyAddress: '123 Address'
	subjectStateSelected: ['Select'],//Normal dropdown example -- subjectStateSelected: ['CT']
	subjectCity: 'Something',
	subjectZip: '12345',
	subjectCounty: '',
	subjectBorrower: '',
	subjectOwnerOfPublicRecord: '',
	subjectLegalDescription: '',
	subjectAssessorsParcel: '',
	subjectTaxYearSelected: ['Select'],
	subjectReTaxes: '',
	subjectNeighborhoodName: '',
	subjectMapReference: '',
	subjectCensusTract: '',
	subjectOccupantSelected: ['Select'],
	subjectSpecialAssessments: '',
	subjectPudHoa: '',
	subjectPudHoaFrequencySelected: ['Select'],
	subjectPropertyRightsAppraisedSelected: ['Select'],
	subjectPropertyRightsAppraisedOther: '',
	subjectAssignmentTypeSelected: ['Select'],
	subjectAssignmentTypeOther: '',
	subjectLenderClient: '',
	subjectAddress: '',
	subjectCurrentlyOfferedSelected: ['Select'],
	subjectDataSourceOfferedPrice: '',
	
	contractAnalyzeContractChecked: '',
	contractPrice: '',
	contractDate: '',//Date example -- contractDate: '2013-11-21'
	contractPropertySellerChecked: '',
	contractDataSources: '',
	contractFinancialAssistanceChecked: '',
	contractFinancialAssistanceYes: '',
	
	neighborhoodLocationSelected: '',
	neighborhoodBuiltUpSelected: '',
	neighborhoodGrowthSelected: '',
	neighborhoodPropertyValuesSelected: '',
	neighborhoodDemandSupplySelected: '',
	neighborhoodMarketingSelected: '',
	neighborhoodPrice: '',
	neighborhoodAge: '',
	neighborhoodPriceSelected: '',
	neighborhoodOneUnit: '',
	neighborhoodTwoToFour: '',
	neighborhoodMultiFamily: '',
	neighborhoodCommercial: '',
	neighborhoodOther: '',
	neighborhoodDescription: '',
	neighborhoodConditions: '',
	
	siteDimensions: '',
	siteArea: '',
	siteShape: '',
	siteView: '',
	siteZoning: '',
	siteZoningDescription: '',
	siteZoningComplianceSelected: '',
	siteZoningComplianceOther: '',
	sitePropertyImprovedSelected: '',
	sitePropertyImprovedOther: '',
	siteElectricitySelected: '',
	siteGasSelected: '',
	siteWaterSelected: '',
	siteSanitarySewerSelected: '',
	siteStreetSelected: '',
	siteAlleySelected: '',
	siteFloodHazardSelected: '',
	siteFemaFloodZone: '',
	siteFemaMap: '',
	siteFemaMapDate: '',
	siteTypicalSelected: '',
	siteTypicalSelectedNo: '',
	siteAdverseSelected: '',
	siteAdverseSelectedOther: '',

	improvementsUnitsSelected: ['Select'],
	improvementsNumOfStories: '34',
	improvementsTypeSelected: ['Select'],
	improvementsDesignStyle: '',
	improvementsYearBuilt: '',
	improvementsEffectiveAgeYears: '',
	improvementsFoundationChecked: '',//Radio Button Example -- improvementsFoundationChecked: 'Something' (In the radio group, "Something" is selected)
	improvementsBasementArea: '',
	improvementsBasementFinish: '',
	improvementsSumpPumpChecked: [],//Checkbox Example -- improvementsSumpPumpChecked: ['Something1','Something3'] (In the checkbox group, 1 and 3 are selected)
	improvementsEvidenceOfSelected: ['Select'],
	improvementsFoundationWalls: '',
	improvementsExteriorWalls: '',
	improvementsRoofSurface: '',
	improvementsGuttersAndDownspouts: '',
	improvementsWindowType: '',
	improvementsStormSash: '',
	improvementsScreens: '',
	improvementsFloors: '',
	improvementsWalls: '',
	improvementsTrimFinish: '',
	improvementsBathFloor: '',
	improvementsBathWainscot: '',
	improvementsAtticSelected: ['Select'],
	improvementsHeatingSelected: ['Select'],
	improvementsFuel: '',
	improvementsCoolingSelected: ['Select'],
	improvementsAmenitiesSelected: ['Select'],
	improvementsCarStorageSelected: ['Select'],
	improvementsNumCars: '',
	improvementsDrivewaySurfaceSelected: ['Select'],
	improvementsAppliancesChecked:[],
	improvementsAppliancesOther: '',
	improvementsRooms: '',
	improvementsBedrooms: '',
	improvementsBaths: '',
	improvementsSqFtGrossLivingArea: '',
	improvementsAdditionalFeatures: '',
	improvementsPropertyCondition: '',
	improvementsPhysicalDeficienciesSelected: ['Select'],
	improvementsPhysicalDeficienciesOther: '',
	improvementsConformToNeighborhoodSelected: ['Select'],
	improvementsConformToNeighborhoodOther: '',
	
	scaComparableCount: '',
	scaComparableFromPrice: '',
	scaComparableToPrice: '',
	scaComparableSaleCount: '',
	scaComparableSaleFromPrice: '',
	scaComparableSaleToPrice: '',
	//Subject
	scaSubjectAddress: '',
	scaSubjectSalePrice: '',
	scaSubjectGrossPrice: '',
	scaSubjectLocation: '',
	scaSubjectLeasehold: '',
	scaSubjectSite: '',
	scaSubjectView: '',
	
	
};

var viewModel = ko.mapping.fromJS(data);//create the viewModel object from the JavaScript object
console.log(viewModel);

/*TODO --retrieve JSON and apply, send JSON to server
	//http://stackoverflow.com/questions/21924495/knockoutjs-ko-mapping-fromjs-not-working
if(JSON EXISTS)
{
	//var jsonData = get json;
	viewModel = ko.mapping.fromJSON(jsonData);////create the viewModel object from the JSON string
	//console.log(jsonData);
}
*/

//Print the current viewModel object
function getUpdatedViewModel()
{
	console.log(ko.mapping.toJS(viewModel));
}

function updateMapping()
{
	ko.mapping.fromJS(data, viewModel);
}

function reapplyBindings()
{
	$("*[data-bind]").each(function(){
		$(this).unbind();
		ko.cleanNode($(this));
		ko.applyBindings(viewModel, this);
	});
}