import {Tags} from '../../js/Util/Tags';

 describe('Tags', function() {
     it('roles', function() {
		 expect(Tags.validate('abc')).toBeTruthy();
	     expect(Tags.validate('abc-')).toBeTruthy();
	     expect(Tags.validate('x-_')).toBeTruthy();
	     expect(Tags.validate('$')).toBeFalsy();
	     expect(Tags.validate('')).toBeFalsy();
	     expect(Tags.validate('   ')).toBeFalsy();
	     expect(Tags.validate(' ab')).toBeFalsy();
     });
});