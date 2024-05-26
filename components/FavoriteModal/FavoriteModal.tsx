import { styles } from './styles';
import { useState, useRef, useEffect } from 'react';
import { Modal, View, Animated, Dimensions, Pressable } from 'react-native';
import { Portal, Text, PaperProvider, useTheme } from 'react-native-paper';
import { AntDesign as CloseIcon } from '@expo/vector-icons';
import CityList from '@/components/CityList';
import { City } from '@/typings';

type FavoriteModalProps = {
	isOpen: boolean;
	onDismiss: () => void;
	cityArray: City[];
};

const { width, height } = Dimensions.get('window');

const FavoriteModal = ({
	isOpen,
	onDismiss,
	cityArray,
}: FavoriteModalProps) => {
	const { colors } = useTheme();

	const [visible, setVisible] = useState(isOpen);
	const scaleAnim = useRef(new Animated.Value(0)).current;
	const translateY = useRef(new Animated.Value(height)).current;
	const translateX = useRef(new Animated.Value(width)).current;

	useEffect(() => {
		if (isOpen) {
			setVisible(true);
			Animated.parallel([
				Animated.spring(scaleAnim, {
					toValue: 1,
					useNativeDriver: true,
				}),
				Animated.spring(translateY, {
					toValue: 0,
					useNativeDriver: true,
				}),
				Animated.spring(translateX, {
					toValue: 0,
					useNativeDriver: true,
				}),
			]).start();
		} else {
			Animated.parallel([
				Animated.timing(scaleAnim, {
					toValue: 0,
					duration: 200,
					useNativeDriver: true,
				}),
				Animated.timing(translateY, {
					toValue: height,
					duration: 200,
					useNativeDriver: true,
				}),
				Animated.timing(translateX, {
					toValue: width,
					duration: 200,
					useNativeDriver: true,
				}),
			]).start(() => setVisible(false));
		}
	}, [isOpen]);

	return (
		<PaperProvider>
			<Portal>
				<Modal
					visible={visible}
					onDismiss={onDismiss}
					presentationStyle="fullScreen"
				>
					<Animated.View
						style={[
							styles.animatedContainer,
							{
								transform: [
									{ scale: scaleAnim },
									{ translateY: translateY },
									{ translateX: translateX },
								],
							},
						]}
					>
						<View style={styles.modalContent}>
							<View style={styles.headerContent}>
								<Text style={styles.text}>Here's your favorite cities</Text>
								<Pressable onPress={onDismiss}>
									<CloseIcon
										style={styles.button}
										name="closecircleo"
										size={40}
										color={colors.primary}
									/>
								</Pressable>
							</View>
							<CityList cityArray={cityArray} />
						</View>
					</Animated.View>
				</Modal>
			</Portal>
		</PaperProvider>
	);
};

export default FavoriteModal;
