import { Pipe } from "@angular/core";

@Pipe({
    name: "arrayfilter"
})
export class ArrayFilterPipe {
    transform(array_instance, filter_term) {
        return array_instance.filter(function(item) {
            return item.includes(filter_term);
        });
    }
}