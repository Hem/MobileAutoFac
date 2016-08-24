using Autofac;
using ImplantChoice.Business.Contracts;
using ImplantChoice.Business.SomeRules;

namespace ImplantChoice.Business
{
    public static class DiRegistration
    {
        public static void AddImplantChoiceBusinessRules(this ContainerBuilder builder)
        {

            builder.RegisterType<RuleA>()
                    .Named<ISomeRule>(RuleA.Name)
                    .PropertiesAutowired()
                    .InstancePerLifetimeScope();

            builder.RegisterType<RuleB>()
                    .Named<ISomeRule>(RuleB.Name)
                    .PropertiesAutowired().
                    InstancePerLifetimeScope();
        }
    }
}
