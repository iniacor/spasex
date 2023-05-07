// import React, { forwardRef, useMemo } from 'react';
// import { TransitionGroup } from 'react-transition-group';
// import { useAppDispatch, useAppSelector } from '../../hooks';
// import { IAlert, Severity } from '../../types/entities';
// import { deleteAlert } from '../../store/slices/alerts';

// interface TempAlertProps extends AlertProps {
//   _id: number;
//   severity: Severity;
//   children?: React.ReactNode;
// }

// const TempAlert = forwardRef<HTMLDivElement, TempAlertProps>(function TempAlert(
//   { _id, severity, children, ...props },
//   ref
// ) {
//   const dispatch = useAppDispatch();

//   const timeOutMemo = useMemo(
//     () =>
//       setTimeout(() => {
//         dispatch(deleteAlert(_id));
//       }, 2000),
//     [_id, dispatch]
//   );

//   const onCloseAlert = (id: number) => {
//     clearInterval(timeOutMemo);
//     dispatch(deleteAlert(id));
//   };

//   return (
//     <Alert
//       ref={ref}
//       {...props}
//       severity={severity}
//       action={
//         <IconButton
//           aria-label='close'
//           color='inherit'
//           size='small'
//           onClick={() => onCloseAlert(_id)}
//         >
//           <CloseIcon fontSize='inherit' />
//         </IconButton>
//       }
//     >
//       {children}
//     </Alert>
//   );
// });

// TempAlert.displayName = 'TempAlert';

// const Alerts = () => {
//   const alerts: IAlert[] = useAppSelector((state) => state.alerts.items);

//   return (
//     <div
//       style={{
//         position: 'fixed',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         bottom: 20,
//         display: 'flex',
//         flexDirection: 'column',
//         gap: 1,
//         zIndex: 10000,
//       }}
//       component={TransitionGroup}
//     >
//       {alerts.map((alert) => (
//         <Collapse key={alert.id}>
//           <TempAlert _id={alert.id} severity={alert.severity}>
//             {alert.text}
//           </TempAlert>
//         </Collapse>
//       ))}
//     </div>
//   );
// };

// export default Alerts;
