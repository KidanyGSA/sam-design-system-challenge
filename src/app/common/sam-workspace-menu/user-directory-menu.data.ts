import { SideNavigationModel, NavigationMode } from '@gsa-sam/components';

export let workspaceMenuData: SideNavigationModel = {
    navigationLinks: [
        { id: 'workspacehome', text: 'Workspace Home', mode: NavigationMode.INTERNAL, route: '/workspace' },      
        {
            id: 'admin', route: '/workspace/admin', mode: NavigationMode.INTERNAL,
            text: 'Administration',
            children: [
                {
                    id: 'users', mode: NavigationMode.INTERNAL,
                    route: '/workspace/admin/users', text: 'User Directory'
                }
            ]
        },
    ]
};



