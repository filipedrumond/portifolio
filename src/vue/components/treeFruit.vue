<template>
    <div :class="!contato ? 'no-contato' : 'contato' + ` c-tree-fruit pos-${index}`" v-if="contato">
        {{contato.type}}
        {{index}}


















        <div role="form" class="wpcf7" id="wpcf7-f283-p65-o11" lang="pt-BR" dir="ltr">
            <form action="" method="post" class="wpcf7-form init" novalidate="novalidate" data-status="init">
                <p><label> Seu nome (obrigatório)<br>
                    <span class="wpcf7-form-control-wrap your-name"><input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" aria-required="true" aria-invalid="false"></span> </label></p>
                <p><label> Seu e-mail (obrigatório)<br>
                    <span class="wpcf7-form-control-wrap your-email"><input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" aria-required="true" aria-invalid="false"></span> </label></p>
                <p>
                    <label> 
                        Assunto<br>
                        <span class="wpcf7-form-control-wrap your-subject">
                            <input type="text" name="your-subject" value="" size="40" class="wpcf7-form-control wpcf7-text" aria-invalid="false">
                        </span> 
                    </label>
                </p>
                <p>
                    <label> Sua mensagem<br>
                    <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"></textarea></span> </label>
                </p>
                <p><input type="submit" value="Enviar" class="wpcf7-form-control wpcf7-submit"></p>
            </form>
        </div>




        
        

    </div>
</template>

<script>
export default {
    name: 'treeFruit',
    data() {
        return {};
    },
    props: ['contato', 'index'],
    methods: {},
};
</script>
<style lang="scss">
    .pos-0{
        top: 15%;
        right: 30%;
    }
</style>
