# Definition of Done (DoD)

_The DoD is a clear and concise agreed upon list of common satisfaction criteria that a unit of work must adhere to for the team to call it complete. Until this list is satisfied, a unit of work is not done. Often times the DoD speaks to the level of quality commitments the team adheres to. The team should regularly review the DoD to ensure it covers the highest value with a mindset of continuous improvement._

## Customer

| DoD Criteria           | Required for MVP(Y/N) | Target Level (if any)                       |
| ---------------------- |---------------------- |-------------------------------------------------|
| Client Alpha Testing   | N                     | Any substantial screen/flow               |
| Usability Testing      | N                     | Any substantial screen/flow                       |
| Product Owner Sign-Off | Y                     | Each user story has PO sign-off upon completion |

## Product Quality

| DoD Criteria | Required for MVP (Y/N) | Target Level (if any) |
|-------------|-----------------|-----------|
| Section 508 Compliance Testing | N | Start w/USWDS - Use ng-aria, etc. |
| Security Scanning | N | TBD - Fortify |
| Code Quality Scanning | Y | CodeClimate scan for Score of 3.2 minimum and no individual file at/below D|
| Manual Exploratory and Automated Functional Testing | Y | Minumum smoke - maximum happy path for each story & some alt. paths|
| Acceptable Defect Severity Levels | Y | TBD |
| Unit Test Coverage | Y | 80% coverage w/ 100% passing rate|
| Documentation | Y | README Update; API docs (Swagger); Soft target for code comments |
| Peer Reviews | Y | At least one peer review and acceptance; merge into development branch (passing CI) |
