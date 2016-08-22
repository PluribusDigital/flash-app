# Definition of Done (DoD)

_The DoD is a clear and concise agreed upon list of common satisfaction criteria that a unit of work must adhere to for the team to call it complete. Until this list is satisfied, a unit of work is not done. Often times the DoD speaks to the level of quality commitments the team adheres to. The team should regularly review the DoD to ensure it covers the highest value with a mindset of continuous improvement._

## Customer
- [ ] Initial validation from client usage (alpha testing)
- [ ] Usability testing?
- [ ] Product Owner (PO) sign-off

## Product Quality
- [ ] Section 508 compliance testing - Not required, but start with USWDS and will use ng-aria
- [ ] Security scanning - Not for MVP?
- [ ] Code quality scanning - CodeClimate score of 3.2 minimum, no individual file at/below D
- [ ] Manual exploratory and automated functional testing (minimum smoke, max is happy path each story & substantial alts)
- [ ] Acceptable defect severity levels 
- [ ] Unit test coverage - 80% coverage / 100% passing
- [ ] Documentation - readme update; api docs (swagger); soft target for code comment
- [ ] At least one peer reviewed and accepted, merged into develop branch (passing CI)

|DoD Criteria |Required for MVP (Y/N) | Commitment (if any)|
|-------------|-----------------|-----------|
|Section 508 Compliance Testing |N|Start w/USWDS - Use ng-aria|
|Security Scanning|N | |
|Code Quality Scanning |N | CodeClimate scan for Score of 3.2 minimum and no individual file at/below D|
|Manual Exploratory and Automated Functional Testing |Y | Minumum smoke - maximum happy path for each story & some alt. paths|
|Acceptable Defect Severity Levels |Y |TBD |
|Unit Test Coverage |Y |80% coverage w/100% passing rate|
|Documentation |Y |README Update; API docs (Swagger); Soft target for code comments|
|Peer Reviews |N |At least one peer review and acceptance; merge into development branch (passing CI)|
