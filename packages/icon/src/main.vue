<template>
    <div class="he-icon">
        <svg v-if="type === 'download'" width="16" height="16" viewBox="0 0 16 16">
            <g fill-rule="nonzero">
                <path d="M3.50165029,8.0001902 L3.50165029,12.5 L12.5016503,12.5 L12.5016503,8.00272969 L14.0016503,8.00272969 L14.0016503,13 C14.0016503,13.5522847 13.553935,14 13.0016503,14 L3.00165029,14 C2.44936554,14 2.00165029,13.5522847 2.00165029,13 L2.00165029,8.0001902 L3.50165029,8.0001902 Z M9.00165029,2 L9.00165029,8 L10.5997265,8 L8.00165029,11 L5.40357408,8 L7.00157408,7.999 L7.00165029,2 L9.00165029,2 Z" id="形状结合" fill="currentColor"/>
            </g>
        </svg>
    </div>
</template>

<script>
export default {
    name: 'HeIcon',
    props: {
        type: {
            type: String,
            default: ''
        }
    }
}
</script>
