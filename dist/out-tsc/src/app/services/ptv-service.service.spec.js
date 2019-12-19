import { TestBed, inject } from '@angular/core/testing';
import { PtvService } from './ptv-service.service';
describe('PtvServiceService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [PtvService]
        });
    });
    it('should be created', inject([PtvService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=ptv-service.service.spec.js.map