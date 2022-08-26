import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
	components: { Assignments, Panel },

	template: `
		<div class="grid gap-6">
			<assignments></assignments>

			<!-- <panel heading="Hello World"></panel> -->
			<panel>
				This is my default content.

				<!-- <template v-slot:default>
					This is my default content.
				</template> -->
			</panel>

			<panel>
				<template v-slot:heading>
					Hi There
				</template>

				This is my default content.
			</panel>

			<panel>
				<template v-slot:heading>
					Hi There
				</template>

				This is my default content.

				<template v-slot:footer>
					Click here to learn more.
				</template>
			</panel>

			<panel theme="light">
				<template v-slot:heading>
					Hi There
				</template>

				This is my default content.

				<template #footer>
					Click here to learn more.
				</template>
			</panel>
		</div>
	`
};
